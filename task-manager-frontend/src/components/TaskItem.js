import React from 'react';

function TaskItem({ task, onUpdateStatus, onDelete }) {
  const getStatusColor = (status) => {
    switch(status) {
      case 'PENDING': return '#f39c12';
      case 'IN_PROGRESS': return '#3498db';
      case 'COMPLETED': return '#2ecc71';
      default: return '#95a5a6';
    }
  };

  return (
    <div className="task-item" style={{ borderLeft: `4px solid ${getStatusColor(task.status)}` }}>
      <div className="task-header">
        <h3>{task.title}</h3>
        <span className="task-status" style={{ backgroundColor: getStatusColor(task.status) }}>
          {task.status}
        </span>
      </div>
      
      <p>{task.description}</p>
      
      <div className="task-actions">
        <select 
          value={task.status} 
          onChange={(e) => onUpdateStatus(task.id, e.target.value)}
        >
          <option value="PENDING">Pending</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="COMPLETED">Completed</option>
        </select>
        
        <button onClick={() => onDelete(task.id)} className="delete-btn">
          Delete
        </button>
      </div>
      
      <small>Created: {new Date(task.createdAt).toLocaleString()}</small>
    </div>
  );
}

export default TaskItem;