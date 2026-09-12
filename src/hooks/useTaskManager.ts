'use client';

import { useState, useEffect, useCallback } from 'react';
import { Task } from '@/types';

const STORAGE_KEY = 'mdr_dashboard_tasks_v2';

const DEFAULT_TASKS: Task[] = [
  { id: '1', text: 'Learn UI/UX Fundamentals', createdAt: Date.now() - 3000 },
  { id: '2', text: 'Build Responsive Landing Page', createdAt: Date.now() - 2000 },
  { id: '3', text: 'Integrate Interactive Dashboard Widgets', createdAt: Date.now() - 1000 }
];

export function useTaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Normalize legacy string array or Task objects
          const normalized = parsed.map((item, idx) => {
            if (typeof item === 'string') {
              return { id: String(idx + 1), text: item, createdAt: Date.now() };
            }
            return item as Task;
          });
          setTasks(normalized);
          setIsLoaded(true);
          return;
        }
      }
    } catch (err) {
      console.error('Failed to load tasks from localStorage:', err);
    }
    setTasks(DEFAULT_TASKS);
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever tasks change
  const saveTasks = useCallback((updatedTasks: Task[]) => {
    setTasks(updatedTasks);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks));
    } catch (err) {
      console.error('Failed to save tasks to localStorage:', err);
    }
  }, []);

  const addTask = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const newTask: Task = {
      id: String(Date.now()),
      text: trimmed,
      createdAt: Date.now()
    };
    saveTasks([...tasks, newTask]);
  }, [tasks, saveTasks]);

  const editTask = useCallback((id: string, newText: string) => {
    const trimmed = newText.trim();
    if (!trimmed) return;
    const updated = tasks.map(t => (t.id === id ? { ...t, text: trimmed } : t));
    saveTasks(updated);
  }, [tasks, saveTasks]);

  const deleteTask = useCallback((id: string) => {
    const updated = tasks.filter(t => t.id !== id);
    saveTasks(updated);
  }, [tasks, saveTasks]);

  return {
    tasks,
    isLoaded,
    addTask,
    editTask,
    deleteTask,
    taskCount: tasks.length
  };
}
