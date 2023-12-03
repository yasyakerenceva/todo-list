import { useParams } from 'react-router-dom';
import { Breadcrmb, TodoTask } from '../../components';
import styles from './taskPage.module.css';
import { useRequestGetTaskId } from '../../hooks';
import { NotFoundPage } from '../notFoundPage/notFoundPage';

export const TaskPage = ({ refreshTasks, setRefreshTasks }) => {
	const { id } = useParams();
	const { task, isFoundTask } = useRequestGetTaskId(id);

	if (isFoundTask === false) {
		return <NotFoundPage />;
	}
	if (isFoundTask) {
		return (
			<>
				<div className={styles.breadcrmb}>
					<Breadcrmb>Назад</Breadcrmb>
				</div>
				<div className={styles.content}>
					<TodoTask
						id={id}
						title={task.title}
						type="text"
						refreshTasks={refreshTasks}
						setRefreshTasks={setRefreshTasks}
					/>
				</div>
			</>
		);
	}
};
