import React from 'react';
import type { Task } from 'entities/task';
import { Button } from '6-shared';

import styles from './TaskCard.module.css';

type Props = {
  task: Task;
  removeTask: (id: string) => void;
};

export const TaskCard = React.memo(function ({ task, removeTask }: Props) {
  const { id, title, completed } = task;

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        {completed && <span className={styles.completed}>✔</span>}
        {title}
      </div>
      <Button onClick={() => removeTask(id)}>Удалить</Button>
    </div>
  );
});
