import { TaskList, useTasks } from '4-features/taskList';

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
