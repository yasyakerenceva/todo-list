import { useState } from 'react';
import { useRequestPostTask } from '../../hooks/index';
import styles from './todoForm.module.css';

export const TodoForm = () => {
	const [valueTask, setValueTask] = useState('');

	const { requestAddTask } = useRequestPostTask();

	const handleSumbitAddTask = (e) => {
		e.preventDefault();
		if (valueTask.trim().length > 0) {
			requestAddTask(valueTask);
			setValueTask('');
		}
	};
	return (
		<form className={styles.form} onSubmit={handleSumbitAddTask}>
			<div className={styles.field}>
				<input
					type="text"
					name="task"
					id="task"
					value={valueTask}
					onChange={({ target }) => setValueTask(target.value)}
					className={styles.input}
					placeholder="Добавить задачу"
				/>
				<button type="submit" className={styles.btn}>
					<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
						<g id="plus">
							<line className="cls-1" x1="16" x2="16" y1="7" y2="25" />
							<line className="cls-1" x1="7" x2="25" y1="16" y2="16" />
						</g>
					</svg>
				</button>
			</div>
		</form>
	);
};
