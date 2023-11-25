import { useState } from 'react';
import styles from './App.module.css';
import TaskDefaultImg from './assets/add-task.png';
import { TodoForm, Filter, Search, TodoList } from './components/index';
import { useDebounce, useRequestGetTasks } from './hooks';

export const App = () => {
	const [search, setSearch] = useState('');
	const [isSortAsc, setIsSortAsc] = useState(false);
	const debouncedSearch = useDebounce(search, 250);
	const { isLoading, tasks } = useRequestGetTasks(isSortAsc, debouncedSearch);

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<TodoForm />
				<Filter
					isCheckingNumTasks={Object.keys(tasks).length}
					isSortAsc={isSortAsc}
					setIsSortAsc={setIsSortAsc}
				/>
			</div>
			<div className={styles.main}>
				<Search search={search} setSearch={setSearch} />
				{isLoading ? (
					<div className={styles.loader}></div>
				) : !Object.keys(tasks).length ? (
					<div className={styles.img}>
						<img src={TaskDefaultImg} alt="add-task" />
					</div>
				) : (
					<TodoList tasks={tasks} />
				)}
			</div>
		</div>
	);
};
