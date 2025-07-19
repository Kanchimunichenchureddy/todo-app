from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from marshmallow import Schema, fields

db = SQLAlchemy()

class Todo(db.Model):
    __tablename__ = 'todos'
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text, nullable=True)
    completed = db.Column(db.Boolean, default=False, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)
    
    def __repr__(self):
        return f'<Todo {self.id}: {self.title}>'
    
    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'completed': self.completed,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None
        }

class TodoSchema(Schema):
    id = fields.Int(dump_only=True)
    title = fields.Str(required=True, validate=lambda x: len(x.strip()) > 0)
    description = fields.Str(allow_none=True)
    completed = fields.Bool(missing=False)
    created_at = fields.DateTime(dump_only=True)
    updated_at = fields.DateTime(dump_only=True)

# Schema instances
todo_schema = TodoSchema()
todos_schema = TodoSchema(many=True) 