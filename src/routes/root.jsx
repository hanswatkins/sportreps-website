import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Brands from './brands';

export default function Root() {
	return (
		<div className='m-6 dark:bg-[#121212]'>
			<NavBar />
			<div id='detail'>
				<Outlet />
			</div>
		</div>
	);
}
