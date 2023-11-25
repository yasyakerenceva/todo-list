import { TodoTask } from '../todoTask/todoTask';
import styles from './todoList.module.css';

export const TodoList = ({ tasks, refreshTasks, setRefreshTasks }) => {
	return (
		<ul className={styles.list}>
			{tasks.map((task) => (
				<TodoTask
					key={task.id}
					id={task.id}
					title={task.title}
					refreshTasks={refreshTasks}
					setRefreshTasks={setRefreshTasks}
				/>
			))}
		</ul>
	);
};
