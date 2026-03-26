import { useState } from 'react';

import type { Task } from 'entities/task';

const initial: Task[] = [
  { id: '1', title: 'Изучить архитектуру', completed: true },
  { id: '2', title: 'Изучить мемоизацию', completed: false },
  { id: '3', title: 'Изучить еще что-нибудь', completed: false },
  { id: '4', title: 'Сдать домашу вовремя', completed: false },
  { id: '5', title: 'Защитить проект', completed: false },
];

export enum Filter {
  All = 'all',
  Completed = 'completed',
  Incomplete = 'incomplete',
}

export function useTasks() {
  const [tasks, setTasks] = useState(initial);
  const [filter, setFilter] = useState<Filter>(Filter.All);

  const onChangeFilter = (filterValue: Filter) => {
    setFilter(filterValue);

    switch (filterValue) {
      case Filter.Completed:
        setTasks(initial.filter(task => task.completed));
        break;
      case Filter.Incomplete:
        setTasks(initial.filter(task => !task.completed));
        break;
      case Filter.All:
      default:
        setTasks(initial);
    }
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return {
    tasks,
    filter,
    setFilter: onChangeFilter,
    removeTask,
  };
}
