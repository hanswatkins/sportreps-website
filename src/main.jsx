import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
	createBrowserRouter,
	RouterProvider,
	useLocation,
} from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './error-page';
import Contact from './routes/contactNew';
import Brands from './routes/brands';
import BackpackersPantry from './routes/backpackersPantry';
import Boreal from './routes/boreal';
import ChillAngel from './routes/chillAngel';
import EmuAustralia from './routes/emuAustralia';
import Gruezi from './routes/gruezi';
import Haflinger from './routes/haflinger';
import Point6 from './routes/point6';
import Velous from './routes/velous';
import Wolky from './routes/wolky';
import ContactForm from './routes/contactform';
import Success from './routes/success';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Brands />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/backpackers-pantry',
				element: <BackpackersPantry />,
			},
			{
				path: '/boreal',
				element: <Boreal />,
			},
			{
				path: '/chill-angel',
				element: <ChillAngel />,
			},
			{
				path: '/emu-australia',
				element: <EmuAustralia />,
			},
			{
				path: '/gruezi',
				element: <Gruezi />,
			},
			{
				path: '/haflinger',
				element: <Haflinger />,
			},
			{
				path: '/point-6',
				element: <Point6 />,
			},
			{
				path: '/velous-footwear',
				element: <Velous />,
			},
			{
				path: '/wolky',
				element: <Wolky />,
			},
			{
				path: '/contact-form',
				element: <ContactForm />,
			},
			{
				path: '/success',
				element: <Success />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
