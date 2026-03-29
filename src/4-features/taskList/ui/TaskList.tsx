import { type Task, TaskCard } from '5-entities/task';
import { Filter } from '4-features/taskList';
import { Button } from '6-shared';

import styles from './TaskList.module.css';

type Props = {
  tasks: Task[];
  filter: Filter;
  setFilter: (filter: Filter) => void;
  removeTask: (id: string) => void;
};

export function TaskList({ tasks, filter, setFilter, removeTask }: Props) {
  return (
    <>
      <div className={styles.filter}>
        <Button
          onClick={() => setFilter(Filter.All)}
          isActive={filter === Filter.All}
        >
          Все
        </Button>
        <Button
          onClick={() => setFilter(Filter.Completed)}
          isActive={filter === Filter.Completed}
        >
          Выполненные
        </Button>
        <Button
          onClick={() => setFilter(Filter.Incomplete)}
          isActive={filter === Filter.Incomplete}
        >
          Не выполненные
        </Button>
      </div>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} removeTask={removeTask} />
      ))}
    </>
  );
}
