import React from 'react';
import wolky1 from '../assets/wolky1.jpg';
import wolky2 from '../assets/wolky2.jpg';
import wolky3 from '../assets/wolky3.jpg';
import wolky4 from '../assets/wolky4.jpg';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const wolky = () => {
	return (
		<div className='-mt-22 md:-mt-36 lg:-mt-46'>
			<div className='bg-wolky h-screen z-0 bg-cover bg-center'></div>
			<div className='flex flex-col m-6 sm:m-16 md:m-14 md:grid md:grid-cols-2 md:items-center min-h-[400px] whitespace-pre-wrap gap-5'>
				<div className='mt-24 md:mt-0 font-header w-2/3'>
					<h1 className='text-3xl md:text-5xl font-bold '>Wolky: </h1>
					<h1 className='text-3xl font-bold md:text-4xl'>
						Designed for walking.
					</h1>
				</div>
				<p className='mt-5 md:mt-0 font-body text-lg'>
					Wolkys are designed to feel like clouds—soft, cushy clouds you get to
					walk all over (lucky you), and it all begins right beneath your feet.
					Our leather-covered footbeds are carefully engineered using the finest
					materials like high-grade memory foam and natural, contoured cork to
					create a cushion that molds to your feet and absorbs the shock of all
					those steps you’re taking. They’re anatomically shaped to help spread
					weight evenly for a comfortable stride, and in many cases, our
					footbeds are even removable. Just replace with a new one or a custom
					orthotic to kick up the walkability of your Wolkys in seconds.
				</p>
			</div>
			<div className='grid grid-cols-1 gap-6 max-w-[1800px] p-10 md:grid-cols-2 md:p-20 '>
				<img src={wolky1} alt='' />
				<img src={wolky2} alt='' />
				<img src={wolky3} alt='' />
				<img src={wolky4} alt='' />
			</div>

			<nav className='p-6 md:p-14 justify-between text-2xl flex'>
				<Link to={'/velous-footwear'} className='flex items-center gap-2'>
					<div>
						<BsChevronLeft size={'2rem'} />
					</div>
					<p className='text-2xl font-bold font-header'>VELOUS</p>
				</Link>

				<Link to={'/backpackers-pantry'} className='flex items-center gap-2'>
					<p className='text-2xl font-bold font-header'>BACKPACKER'S PANTRY</p>
					<div>
						<BsChevronRight size={'2rem'} />
					</div>
				</Link>
			</nav>
		</div>
	);
};

export default wolky;
