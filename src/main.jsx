import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './error-page';
import Contact from './routes/contact';
import Brands from './routes/brands';
import BackpackersPantry from './routes/backpackersPantry'
import Boreal from './routes/boreal'

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
			}
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
