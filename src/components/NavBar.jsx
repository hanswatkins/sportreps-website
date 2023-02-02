import React from 'react';
import logo from '../assets/sportreps-logo.png';

const NavBar = () => {
	return (
		//    Title and Logo
		<div className='flex items-center justify-between'>
			<div className='flex items-center gap-3'>
				{/* <img className='w-20' src={logo} alt='logo' /> */}
				<h1 className='text-2xl md:text-3xl font-bold font-header select-none'>
					Sportreps NW
				</h1>
			</div>

			{/* Desktop Nav Links  */}
			<div>
				<ul className='hidden font-body lg:flex gap-4 text-lg'>
					<a href='#'>
						<li>Brands</li>
					</a>
					<a href='#'>
						<li>Contact</li>
					</a>
				</ul>
			</div>

			{/* Hamburger menu */}
			<div className='flex lg:hidden'>
				<div className='space-y-2 cursor-pointer'>
					<div className='w-8 h-0.3 bg-black'></div>
					<div className='w-8 h-0.3 bg-black'></div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
