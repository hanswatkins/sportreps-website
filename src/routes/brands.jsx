import React from 'react';
import { Link } from 'react-router-dom';
import backpackersPantry from '../assets/backpackers-pantry.jpg';
import boreal from '../assets/boreal.jpg';
import gotBag from '../assets/got-bag.jpg';
import haflinger from '../assets/haflinger.jpg';
import point6 from '../assets/point6.jpeg';
import velous from '../assets/velous.jpg';
import wolky from '../assets/wolky.jpg';

const Brands = () => {
	return (
		<>
			<div className='flex flex-col gap-3 md:grid md:grid-cols-2 select-none m-6 md:m-14'>
				<Link to={'/backpackers-pantry'}>
					<div className='relative group'>
						<img src={backpackersPantry} alt='...' />
						<h1 className='opacity-0 group-hover:opacity-100 transition duration-200 flex group-hover:cursor-pointer items-center justify-center text-white text-2xl lg:text-3xl font-header font-bold absolute top-0 w-full h-full bg-gradient-to-r from-white/20 to-gray-500/20'>
							BACKPACKER'S PANTRY
						</h1>
					</div>
				</Link>
				<Link to={'/boreal'}>
					<div className='relative group'>
						<img src={boreal} alt='...' />
						<h1 className='opacity-0 group-hover:opacity-100 transition duration-200 flex group-hover:cursor-pointer items-center justify-center text-white text-3xl font-header font-bold absolute top-0 w-full h-full bg-gradient-to-r from-white/20 to-gray-500/20'>
							BOREAL
						</h1>
					</div>
				</Link>
				<Link to={'/got-bag'}>
					<div className='relative group'>
						<img src={gotBag} alt='...' />
						<h1 className='opacity-0 group-hover:opacity-100 transition duration-200 flex group-hover:cursor-pointer items-center justify-center text-white text-3xl font-header font-bold absolute top-0 w-full h-full bg-gradient-to-r from-white/20 to-gray-500/20'>
							GOT BAG
						</h1>
					</div>
				</Link>
				<Link to={'/haflinger'}>
					<div className='relative group'>
						<img src={haflinger} alt='...' />
						<h1 className='opacity-0 group-hover:opacity-100 transition duration-200 flex group-hover:cursor-pointer items-center justify-center text-white text-3xl font-header font-bold absolute top-0 w-full h-full bg-gradient-to-r from-white/20 to-gray-500/20'>
							HAFLINGER
						</h1>
					</div>
				</Link>
				<Link to={'/point-6'}>
					<div className='relative group'>
						<img src={point6} alt='...' />
						<h1 className='opacity-0 group-hover:opacity-100 transition duration-200 flex group-hover:cursor-pointer items-center justify-center text-white text-3xl font-header font-bold absolute top-0 w-full h-full bg-gradient-to-r from-white/20 to-gray-500/20'>
							POINT 6
						</h1>
					</div>
				</Link>
				<Link to={'velous-footwear'}>
					<div className='relative group'>
						<img src={velous} alt='...' />
						<h1 className='opacity-0 group-hover:opacity-100 transition duration-200 flex group-hover:cursor-pointer items-center justify-center text-white text-3xl font-header font-bold absolute top-0 w-full h-full bg-gradient-to-r from-white/20 to-gray-500/20'>
							VELOUS FOOTWEAR
						</h1>
					</div>
				</Link>
				<div className='relative group'>
					<img src={wolky} alt='...' />
					<h1 className='opacity-0 group-hover:opacity-100 transition duration-200 flex group-hover:cursor-pointer items-center justify-center text-white text-3xl font-header font-bold absolute top-0 w-full h-full bg-gradient-to-r from-white/20 to-gray-500/20'>
						WOLKY
					</h1>
				</div>
				<div className='relative group'>
					<div className='bg-[#1DA1F2] h-full'>
						<div className='flex group-hover:cursor-pointer items-center justify-center text-white text-3xl absolute top-0 w-full h-full bg-gradient-to-r from-white/20 to-gray-500/20 hover:from-gray-500/20 hover:to-white/20 transition duration-200'>
							<div className='text-center'>
								<h1 className='font-bold'>KURT WATKINS</h1>
								<h1 className='font-thin'>425-785-6406</h1>
								<h1 className='font-thin text-2xl'>kurt@sportreps.net</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Brands;
