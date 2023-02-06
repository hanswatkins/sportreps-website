import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import ScrollToTop from '../components/ScrollToTop';
import Brands from './brands';

export default function Root() {
	return (
		<div className=''>
			<ScrollToTop />
			<NavBar />
			<div id='detail'>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}
