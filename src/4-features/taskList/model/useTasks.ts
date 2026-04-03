import { useCallback, useEffect, useMemo, useState } from 'react';

import { useGetTasksQuery, type Task } from '5-entities/task';

export enum Filter {
  All = 'all',
  Completed = 'completed',
  Incomplete = 'incomplete',
}

const getFilteredTasks = (tasks: Task[], filterValue: Filter) => {
  switch (filterValue) {
    case Filter.Completed:
      return tasks.filter(task => task.completed);
    case Filter.Incomplete:
      return tasks.filter(task => !task.completed);
    case Filter.All:
    default:
      return tasks;
  }
};

export function useTasks() {
  const { data: initial = [] } = useGetTasksQuery();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [visibleTasks, setVisibleTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>(Filter.All);

  const onChangeFilter = useMemo(
    () => (filterValue: Filter) => {
      setFilter(filterValue);

      setVisibleTasks(getFilteredTasks(tasks, filterValue));
    },
    [tasks]
  );

  const removeTask = useCallback(
    (id: string) => {
      setTasks(prev => {
        const newTasks = prev.filter(task => task.id !== id);

        setVisibleTasks(getFilteredTasks(newTasks, filter));

        return newTasks;
      });
    },
    [filter]
  );

  useEffect(() => {
    if (initial.length > 0 && tasks.length === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTasks(initial);
      setVisibleTasks(getFilteredTasks(initial, filter));
    }
  }, [filter, initial, tasks.length]);

  return {
    visibleTasks,
    filter,
    setFilter: onChangeFilter,
    removeTask,
  };
}
