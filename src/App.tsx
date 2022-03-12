import React, { FC } from 'react';
import './App.css';
import TodoList from './components/todo-list/TodoList';

const App: FC = () => {
  return (
    <div className="todo-app">
      <TodoList/>
    </div>
  );
}

export default App;
