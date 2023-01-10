import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import { useLocalStorage } from '../hooks/useLocalStorage';

import { TextField } from './TextField';

const schema = yup.object().shape({
	firstName: yup.string().matches(/^([^0-9]*)$/, 'Имя может содержать только буквы').required('Поле обязательно для заполнения'),
	lastName: yup.string().matches(/^([^0-9]*)$/, 'Фамилия может содержать только буквы'),
	birthYear: yup.string().test('val', 'Укажите правильный год', (val) => {
		if (val.length <= 0) {
			return true;
		}
		val = parseInt(val) || 0;
		const dateNow = new Date();
		return val >= 1900 && val <= parseInt(dateNow.getFullYear());
	}),
	portfolio: yup.string().url('Проверьте правильность указания ссылки')
});

function EditForm() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema)
	});

	const [user, setUser] = useLocalStorage({}, 'user');
	const isEmptyUser = !(user && Object.keys(user).length);

	const onFormSubmit = (formData) => {
		setUser(formData);
		toast('Данные обновлены!');
	};

	return (
		<>
			<h1 className="text-3xl font-bold mb-6">{isEmptyUser ? 'Создать профиль' : 'Редактировать профиль'}</h1>

			<form noValidate autoComplete="off" onSubmit={handleSubmit(onFormSubmit)}>

				<TextField
					label="Имя"
					value={user.firstName}
					name="firstName"
					register={register}
					required
					error={!!errors?.firstName}
					errorMessage={errors?.firstName?.message}
				/>
				<TextField
					label="Фамилия"
					value={user.lastName}
					name="lastName"
					register={register}
					error={!!errors?.lastName}
					errorMessage={errors?.lastName?.message}
				/>

				<TextField
					type="number"
					label="Год рождения"
					value={user.birthYear}
					name="birthYear"
					register={register}
					error={!!errors?.birthYear}
					errorMessage={errors?.birthYear?.message}
				/>

				<TextField
					label="Портфолио"
					value={user.portfolio}
					name="portfolio"
					register={register}
					error={!!errors?.portfolio}
					errorMessage={errors?.portfolio?.message} />

				<div className="flex">
					{isEmptyUser
						?
						<button type="submit" className="btn btn-primary">Добавить</button>
						:
						<>
							<Link to="/" className="btn btn-secondary mr-2">Назад</Link>
							<button type="submit" className="btn btn-primary">Oбновить</button>
						</>
					}
				</div>

			</form>
		</>
	);
}

export { EditForm };