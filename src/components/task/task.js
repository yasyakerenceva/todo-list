import styles from './task.module.css';

export const Task = ({ title }) => {
	return <li className={styles.item}>{title}</li>;
};
