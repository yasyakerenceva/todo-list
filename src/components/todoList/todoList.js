import { TodoTask } from '../todoTask/todoTask';
import styles from './todoList.module.css';

export const TodoList = ({ tasks }) => {
	return (
		<ul className={styles.list}>
			{Object.entries(tasks).map(([id, { title }]) => (
				<TodoTask key={id} id={id} title={title} />
			))}
		</ul>
	);
};
