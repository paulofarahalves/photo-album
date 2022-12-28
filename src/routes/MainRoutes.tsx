import { useRoutes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { AlbumPage } from '../pages/Album';
import { PhotoPage } from '../pages/Photo';

export const MainRoutes = () => {
	return useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/album/:id', element: <AlbumPage /> },
		{ path: '/photo/:id', element: <PhotoPage /> },
	]);
};
