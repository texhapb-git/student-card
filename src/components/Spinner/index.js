import styles from './index.module.css';

function Spinner() {
	return (
		<div className={styles.spinner}>
			<div className={styles.lds}><div></div><div></div></div>
		</div>
	);
}

export default Spinner;