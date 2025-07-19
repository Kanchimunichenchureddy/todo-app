from flask import Flask, request, jsonify
from flask_cors import CORS
from marshmallow import ValidationError
from config import Config
from models import db, Todo, todo_schema, todos_schema

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    # Initialize extensions
    db.init_app(app)
    CORS(app, origins=['http://localhost:5173', 'http://127.0.0.1:5173'], 
         methods=['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
         allow_headers=['Content-Type', 'Authorization'])
    
    # Create tables
    with app.app_context():
        db.create_all()
    
    # Routes
    @app.route('/')
    def index():
        return jsonify({'message': 'Todo API is running!', 'version': '1.0'})
    
    @app.route('/api/todos', methods=['GET'])
    def get_todos():
        print("Getting all todos")
        """Get all todos"""
        try:
            todos = Todo.query.order_by(Todo.created_at.desc()).all()
            return jsonify(todos_schema.dump(todos)), 200
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    
    @app.route('/api/todos', methods=['POST'])
    def create_todo():
        """Create a new todo"""
        try:
            json_data = request.get_json()
            if not json_data:
                return jsonify({'error': 'No input data provided'}), 400
                
            # Validate and deserialize input
            data = todo_schema.load(json_data)
            
            # Create new todo
            todo = Todo(
                title=data['title'],
                description=data.get('description', ''),
                completed=data.get('completed', False)
            )
            
            db.session.add(todo)
            db.session.commit()
            
            return jsonify(todo_schema.dump(todo)), 201
            
        except ValidationError as err:
            return jsonify({'error': 'Validation error', 'messages': err.messages}), 400
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': str(e)}), 500
    
    @app.route('/api/todos/<int:todo_id>', methods=['GET'])
    def get_todo(todo_id):
        """Get a specific todo by ID"""
        try:
            todo = Todo.query.get_or_404(todo_id)
            return jsonify(todo_schema.dump(todo)), 200
        except Exception as e:
            return jsonify({'error': str(e)}), 404
    
    @app.route('/api/todos/<int:todo_id>', methods=['PUT'])
    def update_todo(todo_id):
        """Update a specific todo"""
        try:
            todo = Todo.query.get_or_404(todo_id)
            json_data = request.get_json()
            
            if not json_data:
                return jsonify({'error': 'No input data provided'}), 400
                
            # Validate and deserialize input
            data = todo_schema.load(json_data, partial=True)
            
            # Update todo fields
            if 'title' in data:
                todo.title = data['title']
            if 'description' in data:
                todo.description = data['description']
            if 'completed' in data:
                todo.completed = data['completed']
                
            db.session.commit()
            
            return jsonify(todo_schema.dump(todo)), 200
            
        except ValidationError as err:
            return jsonify({'error': 'Validation error', 'messages': err.messages}), 400
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': str(e)}), 500
    
    @app.route('/api/todos/<int:todo_id>', methods=['DELETE'])
    def delete_todo(todo_id):
        """Delete a specific todo"""
        try:
            todo = Todo.query.get_or_404(todo_id)
            db.session.delete(todo)
            db.session.commit()
            
            return jsonify({'message': f'Todo {todo_id} deleted successfully'}), 200
            
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': str(e)}), 500
    
    @app.route('/api/todos/<int:todo_id>/toggle', methods=['PATCH'])
    def toggle_todo(todo_id):
        """Toggle completion status of a todo"""
        try:
            todo = Todo.query.get_or_404(todo_id)
            todo.completed = not todo.completed
            db.session.commit()
            
            return jsonify(todo_schema.dump(todo)), 200
            
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': str(e)}), 500
    
    # Error handlers
    @app.errorhandler(404)
    def not_found(error):
        return jsonify({'error': 'Resource not found'}), 404
    
    @app.errorhandler(500)
    def internal_error(error):
        db.session.rollback()
        return jsonify({'error': 'Internal server error'}), 500
    
    return app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True, port=5001, host='127.0.0.1')