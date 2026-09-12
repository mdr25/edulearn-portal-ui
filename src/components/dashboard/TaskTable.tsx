'use client';

import { useState } from 'react';
import { useTaskManager } from '@/hooks/useTaskManager';

export default function TaskTable() {
  const { tasks, isLoaded, addTask, editTask, deleteTask, taskCount } = useTaskManager();
  const [newInput, setNewInput] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (newInput.trim()) {
      addTask(newInput.trim());
      setNewInput('');
    }
  };

  const startEdit = (id: string, currentText: string) => {
    setEditingId(id);
    setEditingText(currentText);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId && editingText.trim()) {
      editTask(editingId, editingText.trim());
      setEditingId(null);
      setEditingText('');
    }
  };

  return (
    <div className="crud p-4 shadow-sm">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h5 className="m-0 fw-bold">My Tasks</h5>
        <span className="badge bg-primary rounded-pill px-3 py-2" style={{ backgroundColor: '#5e81f4 !important' }}>
          {isLoaded ? `${taskCount} ${taskCount === 1 ? 'Task' : 'Tasks'}` : 'Loading...'}
        </span>
      </div>

      <form onSubmit={handleAdd} className="d-flex mb-3">
        <input
          type="text"
          value={newInput}
          onChange={(e) => setNewInput(e.target.value)}
          placeholder="Add a new task..."
          className="form-control me-2"
        />
        <button type="submit" className="btn btn-primary px-3" style={{ backgroundColor: '#5e81f4', borderColor: '#5e81f4' }}>
          <i className="bx bx-plus"></i>
        </button>
      </form>

      {editingId && (
        <div id="edit-box" className="p-3 mb-3 bg-light rounded border">
          <form onSubmit={handleSaveEdit} className="d-flex">
            <input
              type="text"
              value={editingText}
              onChange={(e) => setEditingText(e.target.value)}
              className="form-control me-2"
              autoFocus
            />
            <button type="submit" className="btn btn-success me-2">
              Save
            </button>
            <button type="button" onClick={() => setEditingId(null)} className="btn btn-secondary">
              Cancel
            </button>
          </form>
        </div>
      )}

      <div className="table-responsive">
        <table className="table table-hover align-middle m-0">
          <tbody>
            {tasks.length > 0 ? (
              tasks.map((task, idx) => (
                <tr key={task.id}>
                  <td className="ps-2 w-100">
                    <span className="fw-semibold me-2">{idx + 1}.</span>
                    {task.text}
                  </td>
                  <td className="text-nowrap pe-2">
                    <button
                      type="button"
                      onClick={() => startEdit(task.id, task.text)}
                      className="crud-btn align-middle me-2"
                      title="Edit task"
                    >
                      <i className="bx bxs-edit text-warning fs-5"></i>
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteTask(task.id)}
                      className="crud-btn align-middle"
                      title="Delete task"
                    >
                      <i className="bx bx-trash text-danger fs-5"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="text-center text-muted py-4">
                  No tasks found. Add a task above!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
