import { TaskList, useTasks } from 'features/taskList';

export function TaskWidget() {
  const { visibleTasks, filter, setFilter, removeTask } = useTasks();

  return (
    <TaskList
      tasks={visibleTasks}
      filter={filter}
      setFilter={setFilter}
      removeTask={removeTask}
    />
  );
}
