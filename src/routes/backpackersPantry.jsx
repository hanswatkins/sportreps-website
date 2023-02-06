import React from 'react';
import heroImage from '../assets/backpackers-pantry.jpg';
import padthai from '../assets/padthai.jpg';
import padthaichicken from '../assets/padthaichicken.jpg';
import fettucine from '../assets/fettucine.jpg';
import risotto from '../assets/risotto.jpg';
import { BsChevronRight } from '../../node_modules/react-icons/bs';
import { Link } from 'react-router-dom';

const backpackersPantry = () => {
	return (
		<div className='-mt-22 md:-mt-36 lg:-mt-46'>
			<div className='bg-backpackers h-screen z-0 bg-cover'></div>
			<div className='flex flex-col m-6 md:m-14 md:grid md:grid-cols-2 md:items-center min-h-[400px] whitespace-pre-wrap gap-5'>
				<div className='mt-24 md:mt-0 font-header'>
					<h1 className='text-3xl md:text-5xl font-bold '>
						Backpacker's Pantry:{' '}
					</h1>
					<h1 className='text-3xl font-bold md:text-4xl'>
						Fueling your adventure
					</h1>
				</div>
				<p className='mt-5 mb-24 md:mt-0 md:mb-0 font-body text-lg'>
					Whether you’re doing an overnighter or a multi-day trek, backpacking
					light is the way to go. Packing enough food to fuel your body is vital
					but ounces become pounds when you start moving. Our Backpacker's
					Pantry lightweight, freeze-dried camping meals are not only light, but
					easy, convenient, and ready in minutes while you soak your trail-weary
					feet in a cold alpine stream. The way we see it, we’ll take care of
					feeding your body while you nourish that soul of yours on your path to
					discovering your deepest nature.
				</p>
			</div>
			<div className='grid grid-cols-1 gap-6 max-w-[1800px] p-10 md:grid-cols-2 md:p-20 '>
				<img src={padthai} alt='' />
				<img src={risotto} alt='' />
				<img src={fettucine} alt='' />
				<img src={padthaichicken} alt='' />
			</div>

			<nav className='p-6 md:p-14 justify-end text-2xl flex'>
				<Link to={'/boreal'} className='flex items-center gap-2'>
					<p className='text-2xl font-bold font-header'>BOREAL</p>
					<div>
						<BsChevronRight size={'2rem'} />
					</div>
				</Link>
			</nav>
		</div>
	);
};

export default backpackersPantry;
