import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { MainPage } from './pages/mainPage/mainPage';
import { TaskPage } from './pages/taskPage/taskPage';
import { useState } from 'react';
import { NotFoundPage } from './pages/notFoundPage/notFoundPage';

export const App = () => {
	const [refreshTasks, setRefreshTasks] = useState(false);

	return (
		<div className={styles.wrapper}>
			<Routes>
				<Route
					path="/"
					element={
						<MainPage
							refreshTasks={refreshTasks}
							setRefreshTasks={setRefreshTasks}
						/>
					}
				/>
				<Route
					path="task/:id"
					element={
						<TaskPage
							refreshTasks={refreshTasks}
							setRefreshTasks={setRefreshTasks}
						/>
					}
				/>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</div>
	);
};
