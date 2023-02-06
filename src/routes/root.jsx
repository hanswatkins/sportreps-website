import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Brands from './brands';

export default function Root() {
	return (
		<div className=''>
			<NavBar />
			<div id='detail'>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}
