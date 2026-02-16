import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import './App.css';

const API_URL = 'http://localhost:8080/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState('ALL');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const fetchTasksByStatus = async (status) => {
    try {
      if (status === 'ALL') {
        fetchTasks();
      } else {
        const response = await fetch(`${API_URL}/status/${status}`);
        const data = await response.json();
        setTasks(data);
      }
    } catch (error) {
      console.error('Error filtering tasks:', error);
    }
  };

  const addTask = async (task) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
      });
      const newTask = await response.json();
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const updateTaskStatus = async (id, newStatus) => {
    try {
      const taskToUpdate = tasks.find(t => t.id === id);
      const updatedTask = { ...taskToUpdate, status: newStatus };

      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTask)
      });

      const updated = await response.json();
      setTasks(tasks.map(task => (task.id === id ? updated : task)));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="App">
      <h1>Task Management System</h1>
      
      <AddTaskForm onAddTask={addTask} />
      
      <div className="filter-buttons">
        <button onClick={() => { setFilterStatus('ALL'); fetchTasks(); }}>All</button>
        <button onClick={() => { setFilterStatus('PENDING'); fetchTasksByStatus('PENDING'); }}>Pending</button>
        <button onClick={() => { setFilterStatus('IN_PROGRESS'); fetchTasksByStatus('IN_PROGRESS'); }}>In Progress</button>
        <button onClick={() => { setFilterStatus('COMPLETED'); fetchTasksByStatus('COMPLETED'); }}>Completed</button>
      </div>
      
      <TaskList 
        tasks={tasks} 
        onUpdateStatus={updateTaskStatus}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;