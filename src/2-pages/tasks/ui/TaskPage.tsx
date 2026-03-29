import { TaskWidget } from '3-widgets/task';

import styles from './TaskPage.module.css';

export function TaskPage() {
  return (
    <div className={styles.root}>
      <h1>Мои задачи</h1>
      <TaskWidget />
    </div>
  );
}
