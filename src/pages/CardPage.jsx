import { Card } from '../components/Card';
import { CardEmpty } from '../components/CardEmpty';
import { useLocalStorage } from '../hooks/useLocalStorage';

function CardPage() {
	const [user] = useLocalStorage({}, 'user');
	const isEmptyUser = !(user && Object.keys(user).length);

	return (
		<>
			<h1 className="text-3xl font-bold mb-3">Карточка студента</h1>
			{
				isEmptyUser
					? <CardEmpty />
					: <Card user={user} />
			}
		</>
	);
}

export default CardPage;