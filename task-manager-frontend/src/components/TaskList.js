import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onUpdateStatus, onDelete }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks found. Add one to get started!</p>
      ) : (
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onUpdateStatus={onUpdateStatus}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;