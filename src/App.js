import { useRoutes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import routes from './routes/routes';
import { Container } from './components/Container';

import 'react-toastify/dist/ReactToastify.css';

import './app.scss';

function App() {
	const appRoutes = useRoutes(routes);

	return (
		<>
			<Container>
				{appRoutes}
			</Container>

			<ToastContainer />
		</>
	);
}

export { App };
