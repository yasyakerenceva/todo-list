import { useNavigate } from 'react-router-dom';
import styles from './buttonTask.module.css';

export const ButtonTask = ({ id, requestDeleteTask, handleEditTask, type, children }) => {
	const navigate = useNavigate();
	const handleTask = () => {
		switch (type) {
			case 'edit':
				handleEditTask();
				break;
			case 'delete':
				requestDeleteTask(id);
				navigate('/');
				break;
			default:
				break;
		}
	};
	return (
		<button onClick={handleTask} className={styles.btn}>
			<span className={styles.text}>{children}</span>
		</button>
	);
};
