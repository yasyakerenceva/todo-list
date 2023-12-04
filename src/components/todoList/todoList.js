import { TodoTask } from '../todoTask/todoTask';
import styles from './todoList.module.css';

export const TodoList = ({ tasks }) => {
	return (
		<ul className={styles.list}>
			{tasks.map((task) => (
				<TodoTask key={task.id} id={task.id} title={task.title} />
			))}
		</ul>
	);
};
