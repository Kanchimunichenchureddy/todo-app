#!/bin/bash

echo "🚀 Todo App Setup Script"
echo "========================="
echo ""

# Check if MySQL is running
echo "📋 Checking MySQL connection..."
mysql -u root -pTest@997755 -e "SELECT 1;" &> /dev/null
if [ $? -eq 0 ]; then
    echo "✅ MySQL is running"
else
    echo "❌ MySQL is not running or not accessible"
    echo "Please start MySQL and ensure it's accessible with user 'root' and no password"
    echo "Or update the database configuration in todo-app-backend/config.py"
    exit 1
fi

# Create database if it doesn't exist
echo "📋 Creating database 'todo_app' if it doesn't exist..."
mysql -u root -pTest@997755 -e "CREATE DATABASE IF NOT EXISTS todo_app;"
if [ $? -eq 0 ]; then
    echo "✅ Database 'todo_app' is ready"
else
    echo "❌ Failed to create database"
    exit 1
fi

echo ""
echo "🐍 Setting up Flask Backend..."
echo "==============================="
cd todo-app-backend

# Create virtual environment if it doesn't exist
if [ ! -d "todo_env" ]; then
    echo "📦 Creating virtual environment..."
    python -m venv todo_env
fi

# Activate virtual environment
echo "🔄 Activating virtual environment..."
source todo_env/bin/activate

# Install Python dependencies
echo "📦 Installing Python dependencies..."
pip install -r requirements.txt

echo "✅ Backend setup complete!"

# Go back to main directory
cd ..

echo ""
echo "⚛️  Setting up React Frontend..."
echo "================================"
cd todo-app-ui

# Install Node dependencies
echo "📦 Installing Node.js dependencies..."
npm install

echo "✅ Frontend setup complete!"

# Go back to main directory
cd ..

echo ""
echo "🎉 Setup Complete!"
echo "=================="
echo ""
echo "To start the application:"
echo ""
echo "1. Start the Flask backend:"
echo "   cd todo-app-backend"
echo "   source todo_env/bin/activate"
echo "   python app.py"
echo "   (Backend will run on http://localhost:5000)"
echo ""
echo "2. In a new terminal, start the React frontend:"
echo "   cd todo-app-ui"
echo "   npm run dev"
echo "   (Frontend will run on http://localhost:5173)"
echo ""
echo "3. Open http://localhost:5173 in your browser"
echo ""
echo "🚀 Happy coding!" 