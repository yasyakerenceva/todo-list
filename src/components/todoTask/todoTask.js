import { Link } from 'react-router-dom';
import styles from './todoTask.module.css';
import { useRef, useState } from 'react';
import { useRequestDeleteTask, useRequestUpdateTask } from '../../hooks';
import { ButtonTask } from '../buttonTask/buttonTask';

export const TodoTask = ({ id, title, type, refreshTasks, setRefreshTasks }) => {
	const [isInputVisible, setIsInputVisible] = useState(false);
	const [valueEdit, setValueEdit] = useState(title);
	const refInputEdit = useRef(null);

	const { requestDeleteTask } = useRequestDeleteTask(refreshTasks, setRefreshTasks);
	const { requestUpdateTask } = useRequestUpdateTask(refreshTasks, setRefreshTasks);

	const handleEditTask = () => {
		setIsInputVisible(true);
		setTimeout(() => {
			refInputEdit.current.focus();
		}, 0);
	};

	const handleBlurInputEdit = () => {
		requestUpdateTask(id, valueEdit);
		setIsInputVisible(false);
	};

	if (type === 'link') {
		return (
			<li className={styles.item}>
				<Link to={`task/${id}`} className={styles.link}>
					{title}
				</Link>
			</li>
		);
	}

	if (type === 'text') {
		return (
			<>
				<div className={styles.task}>
					{isInputVisible ? (
						<input
							ref={refInputEdit}
							type="text"
							value={valueEdit}
							className={styles.input}
							onChange={({ target }) => setValueEdit(target.value)}
							onBlur={handleBlurInputEdit}
						/>
					) : (
						<span className={styles.text}>{valueEdit}</span>
					)}
				</div>
				<div className={styles.btns}>
					<ButtonTask id={id} type="edit" handleEditTask={handleEditTask}>
						Изменить
					</ButtonTask>
					<ButtonTask
						id={id}
						type="delete"
						requestDeleteTask={requestDeleteTask}
					>
						Удалить
					</ButtonTask>
				</div>
			</>
		);
	}
};
