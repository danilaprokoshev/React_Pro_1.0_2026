import { useCallback, useMemo, useState } from 'react';

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
  const [visibleTasks, setVisibleTasks] = useState(initial);
  const [filter, setFilter] = useState<Filter>(Filter.All);

  const onChangeFilter = useMemo(
    () => (filterValue: Filter) => {
      setFilter(filterValue);

      switch (filterValue) {
        case Filter.Completed:
          setVisibleTasks(tasks.filter(task => task.completed));
          break;
        case Filter.Incomplete:
          setVisibleTasks(tasks.filter(task => !task.completed));
          break;
        case Filter.All:
        default:
          setVisibleTasks(() => tasks);
      }
    },
    [tasks]
  );

  const removeTask = useCallback(
    (id: string) => {
      setTasks(prev => {
        const newTasks = prev.filter(task => task.id !== id);

        switch (filter) {
          case Filter.Completed:
            setVisibleTasks(newTasks.filter(task => task.completed));
            break;
          case Filter.Incomplete:
            setVisibleTasks(newTasks.filter(task => !task.completed));
            break;
          case Filter.All:
          default:
            setVisibleTasks(newTasks);
            break;
        }

        return newTasks;
      });
    },
    [filter]
  );

  return {
    visibleTasks,
    filter,
    setFilter: onChangeFilter,
    removeTask,
  };
}
