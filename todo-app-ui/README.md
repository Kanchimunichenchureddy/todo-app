# Todo App Frontend (React)

A modern, responsive todo application built with React and Vite.

## Features

- Create, read, update, and delete todos
- Mark todos as complete/incomplete
- Filter todos by status (All, Active, Completed)
- Real-time statistics
- Inline editing
- Beautiful, modern UI with animations
- Responsive design for mobile and desktop
- Error handling and loading states

## Technology Stack

- React 19 with hooks
- Vite for fast development and building
- Axios for API communication
- CSS3 with modern features and animations
- ESLint for code quality

## Setup Instructions

### Prerequisites

- Node.js 16+ and npm
- Backend API running on `http://localhost:5000`

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd 01-todo-app/todo-app-ui
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:5173`

### Building for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── AddTodo.jsx     # Add new todo form
│   ├── AddTodo.css     # Styles for AddTodo
│   ├── TodoItem.jsx    # Individual todo item
│   ├── TodoItem.css    # Styles for TodoItem
│   ├── TodoList.jsx    # Todo list with filters
│   └── TodoList.css    # Styles for TodoList
├── services/
│   └── api.js          # API service layer
├── App.jsx             # Main application component
├── App.css             # Global application styles
├── index.css           # Base styles
└── main.jsx            # Application entry point
```

## Key Features

### Todo Management
- Add new todos with title and optional description
- Edit todos inline by clicking the "Edit" button
- Delete todos with confirmation
- Toggle completion status with checkboxes

### Filtering and Statistics
- View all todos, only active ones, or only completed ones
- Real-time statistics showing total, active, and completed counts
- Clean, intuitive filter interface

### User Experience
- Responsive design that works on all screen sizes
- Smooth animations and transitions
- Loading states while fetching data
- Error handling with retry options
- Modern, accessible UI components

## API Integration

The frontend communicates with the Flask backend through a service layer (`src/services/api.js`) that handles:
- GET requests to fetch todos
- POST requests to create new todos
- PUT requests to update existing todos
- DELETE requests to remove todos
- PATCH requests to toggle completion status

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Configuration

The API base URL is configured in `src/services/api.js`. Update this if your backend runs on a different port or domain.

## Browser Support

This application supports all modern browsers that support ES6+ features.
