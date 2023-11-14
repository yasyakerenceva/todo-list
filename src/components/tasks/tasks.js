import { useRequestGetTasks } from '../../hooks';
import { Task } from '../task/task';
import styles from './tasks.module.css';

export const Tasks = () => {
	const { isLoading, tasks } = useRequestGetTasks();

	return (
		<ul className={styles.list}>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				tasks.map((task) => <Task key={task.id} title={task.title} />)
			)}
		</ul>
	);
};
