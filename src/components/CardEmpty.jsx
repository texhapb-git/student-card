import { Link } from 'react-router-dom';

function CardEmpty() {
	return (
		<>
			<div className="mb-3">Нет данных</div>
			<Link to="/edit" className="btn btn-primary">Добавить</Link>
		</>
	);
}

export { CardEmpty };