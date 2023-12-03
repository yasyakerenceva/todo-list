import { useState } from 'react';
import styles from './mainPage.module.css';
import TaskDefaultImg from '../../assets/add-task.png';
import { TodoForm, Filter, Search, TodoList } from '../../components/index';
import { useDebounce, useRequestGetTasks } from '../../hooks/index';

export const MainPage = ({ refreshTasks, setRefreshTasks }) => {
	const [isSortAsc, setIsSortAsc] = useState(false);
	const [search, setSearch] = useState('');
	const debouncedSearch = useDebounce(search, 250);
	const { isLoading, isFulfilled, tasks } = useRequestGetTasks(
		refreshTasks,
		isSortAsc,
		debouncedSearch,
	);

	return (
		<>
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
				) : isFulfilled === false ? (
					<div className={styles.img}>
						<img src={TaskDefaultImg} alt="add-task" />
					</div>
				) : (
					<TodoList tasks={tasks} />
				)}
			</div>
			`
		</>
	);
};
