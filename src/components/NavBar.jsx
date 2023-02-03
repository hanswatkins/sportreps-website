import React from 'react';
import { useState } from 'react';
import logo from '../assets/sportreps-logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	return (
		//    Title and Logo
		<div className='flex items-center justify-between mb-10'>
			<div className='flex items-center gap-3'>
				{/* <img className='w-20' src={logo} alt='logo' /> */}
				<h1 className='text-2xl md:text-3xl font-bold font-header select-none tracking-wide dark:text-white'>
					SportReps NW
				</h1>
			</div>

			{/* Hamburger menu */}
			<div
				className='flex lg:hidden'
				onClick={() => setIsNavOpen((prev) => !prev)}
			>
				<div className='space-y-2.5 cursor-pointer select-none'>
					<div className='w-9 h-0.3 bg-black dark:bg-white'></div>
					<div className='w-9 h-0.3 bg-black dark:bg-white'></div>
				</div>
			</div>

			{/* Desktop Nav Links  */}
			<div className='hidden lg:flex'>
				<ul className='font-body flex gap-4 text-lg'>
					<Link to={'/'} className='underline underline-offset-8'>
						Brands
					</Link>

					<Link
						to={'/contact'}
						className='underline underline-offset-8'
						href='/contact'
					>
						Contact
					</Link>
				</ul>
			</div>

			{/* Mobile Open Nav Menu  */}
			<div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
				<div
					className='absolute top-0 right-0 px-8 py-8'
					onClick={() => setIsNavOpen(false)}
				>
					<svg
						className='h-8 w-8 text-white cursor-pointer'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='1'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<line x1='18' y1='6' x2='6' y2='18' />
						<line x1='6' y1='6' x2='18' y2='18' />
					</svg>
				</div>
				<ul className='flex flex-col items-center'>
					<li className='hover:text-indigo-400 hover:border-indigo-400 border-b border-gray-400 my-8 uppercase font-bold '>
						<Link to={'/'} onClick={() => setIsNavOpen(false)}>
							Brands
						</Link>
					</li>
					<li
						onClick={() => setIsNavOpen(false)}
						className='hover:text-indigo-400 hover:border-indigo-400 border-b  border-gray-400 my-8 uppercase font-bold'
					>
						<Link to={'/contact'}>Contact</Link>
					</li>
				</ul>
			</div>

			<style>{`
      .hideMenuNav {
        display: none;
      } 
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #121212;
        z-index: 10;
        display: flex;
		color: white;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
		</div>
	);
};

export default NavBar;
