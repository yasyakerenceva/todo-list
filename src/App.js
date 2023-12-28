import styles from './App.module.css';
import TaskDefaultImg from './assets/add-task.png';
import { TodoForm, Filter, Search, TodoList } from './components/index';
import { useRequestGetTasks } from './hooks';

export const App = () => {
	const { isLoading, isFulfilled } = useRequestGetTasks();

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<TodoForm />
				<Filter />
			</div>
			<div className={styles.main}>
				<Search />
				{isLoading ? (
					<div className={styles.loader}></div>
				) : isFulfilled === false ? (
					<div className={styles.img}>
						<img src={TaskDefaultImg} alt="add-task" />
					</div>
				) : (
					<TodoList />
				)}
			</div>
		</div>
	);
};
