import { Link } from 'react-router-dom';

import { declOfNum } from '../utils/utils';

import { UserCardLine } from './UserCardLine';

function Card({ user }) {
	const fullName = `${user.firstName} ${user.lastName}`.trim();
	let yearsDiffText = '';

	if (user.birthYear) {
		const dateNow = new Date();
		const yearsDiff = parseInt(dateNow.getFullYear()) - parseInt(user.birthYear);
		yearsDiffText = `(${yearsDiff} ${declOfNum(yearsDiff, ['год', 'года', 'лет'])})`;
	}

	return (
		<div className="user-card">
			<UserCardLine label="Имя:" content={fullName} />

			{user.birthYear && <UserCardLine label="Дата рождения:" content={`${user.birthYear} ${yearsDiffText}`} />}

			{user.portfolio && <UserCardLine label="Портфолио:" content={<a className="text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out mb-4" href={user.portfolio}>{user.portfolio}</a>} />}

			<div className="flex mt-4">
				<Link to="/edit" className="btn btn-primary">Редактировать</Link>
			</div>
		</div>
	);
}

export { Card };
