import { useState } from 'react';
import styles from './App.module.css';
import TaskDefaultImg from './assets/add-task.png';
import { TodoForm, Filter, Search, TodoList } from './components/index';
import { useDebounce, useRequestGetTasks } from './hooks';

export const App = () => {
	const [refreshTasks, setRefreshTasks] = useState(false);
	const [isSortAsc, setIsSortAsc] = useState(false);
	const [search, setSearch] = useState('');
	const debouncedSearch = useDebounce(search, 250);
	const { isLoading, tasks } = useRequestGetTasks(
		refreshTasks,
		isSortAsc,
		debouncedSearch,
	);

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<TodoForm refreshTasks={refreshTasks} setRefreshTasks={setRefreshTasks} />
				<Filter
					isCheckingNumTasks={tasks.length}
					isSortAsc={isSortAsc}
					setIsSortAsc={setIsSortAsc}
				/>
			</div>
			<div className={styles.main}>
				<Search search={search} setSearch={setSearch} />
				{isLoading ? (
					<div className={styles.loader}></div>
				) : !tasks.length ? (
					<div className={styles.img}>
						<img src={TaskDefaultImg} alt="add-task" />
					</div>
				) : (
					<TodoList
						tasks={tasks}
						refreshTasks={refreshTasks}
						setRefreshTasks={setRefreshTasks}
					/>
				)}
			</div>
		</div>
	);
};
