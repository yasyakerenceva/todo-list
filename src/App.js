import styles from './App.module.css';
import { Tasks } from './components';

export const App = () => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Список дел</h1>
			<Tasks />
		</div>
	);
};
