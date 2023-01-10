import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

import Spinner from '../components/Spinner';

const CardPage = lazy(() => import('../pages/CardPage'));
const EditPage = lazy(() => import('../pages/EditPage'));

const routes = [
	{
		path: '',
		element: <Suspense fallback={<Spinner />}><CardPage /></Suspense>
	},
	{
		path: 'edit',
		element: <Suspense fallback={<Spinner />}><EditPage /></Suspense>
	},
	{
		path: '*',
		element: <Navigate to="/" />
	}
];

export default routes;
