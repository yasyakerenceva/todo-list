import NotFoundImg from '../../assets/not-found.png';
import { Breadcrmb } from '../../components';
import styles from './notFoundPage.module.css';

export const NotFoundPage = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.breadcrmb}>
				<Breadcrmb>На главную</Breadcrmb>
			</div>
			<div className={styles.img}>
				<img src={NotFoundImg} alt="404" />
			</div>
		</div>
	);
};
