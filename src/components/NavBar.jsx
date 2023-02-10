import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const location = useLocation();

	if (
		location.pathname == '/boreal' ||
		location.pathname == '/backpackers-pantry' ||
		location.pathname == '/got-bag' ||
		location.pathname == '/haflinger' ||
		location.pathname == '/velous-footwear' ||
		location.pathname == '/wolky'
	) {
		// white navbar
		return (
			<div className='flex items-center justify-between mb-8 lg:mb-24 m-6 md:m-14 bg-transparent z-50'>
				<div className='flex items-center gap-3'>
					{/* <img className='w-20' src={logo} alt='logo' /> */}
					<Link to={'/'} className='hover:cursor-pointer'>
						<h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white font-header select-none tracking-wider hover:cursor-pointer'>
							SportReps NW
						</h1>
					</Link>
				</div>

				{/* Hamburger menu */}
				<div
					className='flex lg:hidden'
					onClick={() => setIsNavOpen((prev) => !prev)}
				>
					<div className='space-y-2.5 cursor-pointer select-none'>
						<div className='w-9 h-0.3 bg-white'></div>
						<div className='w-9 h-0.3 bg-white'></div>
					</div>
				</div>

				{/* Desktop Nav Links  */}
				<div className='hidden lg:flex'>
					<div className='font-body tracking-wider flex gap-4 text-lg items-center'>
						<Link
							to={'/'}
							className='hover:underline hover:underline-offset-8 select-none decoration-1 text-white'
						>
							Brands
						</Link>

						<Link
							to={'/contact'}
							className='hover:underline hover:underline-offset-8 select-none decoration-1 text-white'
							href='/contact'
						>
							Contact
						</Link>
					</div>
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
						<li className='hover:text-gray-300 hover:border-gray-300 hover:border-b my-8 uppercase font-bold'>
							<Link
								to={'/'}
								className='font-header tracking-wider'
								onClick={() => setIsNavOpen(false)}
							>
								Brands
							</Link>
						</li>
						<li
							onClick={() => setIsNavOpen(false)}
							className='hover:text-gray-300 hover:border-gray-300 hover:border-b my-8 uppercase font-bold'
						>
							<Link to={'/contact'} className='font-header tracking-wider'>
								Contact
							</Link>
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
	} else {
		// black navbar
		return (
			//    Title and Logo
			<div className='flex items-center justify-between mb-8 lg:mb-24 m-6 md:m-14 bg-transparent z-50'>
				<div className='flex items-center gap-3'>
					{/* <img className='w-20' src={logo} alt='logo' /> */}
					<Link to={'/'} className='hover:cursor-pointer'>
						<h1 className='text-2xl md:text-3xl lg:text-4xl font-bold font-header select-none tracking-wider hover:cursor-pointer'>
							SportReps NW
						</h1>
					</Link>
				</div>

				{/* Hamburger menu */}
				<div
					className='flex lg:hidden'
					onClick={() => setIsNavOpen((prev) => !prev)}
				>
					<div className='space-y-2.5 cursor-pointer select-none'>
						<div className='w-9 h-0.3 bg-black'></div>
						<div className='w-9 h-0.3 bg-black'></div>
					</div>
				</div>

				{/* Desktop Nav Links  */}
				<div className='hidden lg:flex'>
					<div className='font-body tracking-wider flex gap-4 text-lg items-center'>
						<Link
							to={'/'}
							className='hover:underline hover:underline-offset-8 select-none decoration-1 '
						>
							Brands
						</Link>

						<Link
							to={'/contact'}
							className='hover:underline hover:underline-offset-8 select-none decoration-1'
							href='/contact'
						>
							Contact
						</Link>
					</div>
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
						<li className='hover:text-gray-300 hover:border-gray-300 hover:border-b my-8 uppercase font-bold'>
							<Link
								to={'/'}
								className='font-header tracking-wider'
								onClick={() => setIsNavOpen(false)}
							>
								Brands
							</Link>
						</li>
						<li
							onClick={() => setIsNavOpen(false)}
							className='hover:text-gray-300 hover:border-gray-300 hover:border-b my-8 uppercase font-bold'
						>
							<Link to={'/contact'} className='font-header tracking-wider'>
								Contact
							</Link>
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
	}
};

export default NavBar;
