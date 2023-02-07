import React from 'react';
import rolltop from '../assets/rolltop.jpg';
import rolltopLite from '../assets/rolltop-lite.jpg';
import weekender from '../assets/weekender.jpg';
import hipBag from '../assets/hipbag.jpg';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const gotBag = () => {
	return (
		<div className='-mt-22 md:-mt-36 lg:-mt-46'>
			<div className='bg-gotbag h-screen z-0 bg-cover bg-center'></div>
			<div className='flex flex-col m-6 sm:m-16 md:m-14 md:grid md:grid-cols-2 md:items-center min-h-[400px] whitespace-pre-wrap gap-5'>
				<div className='mt-24 md:mt-0 font-header w-2/3'>
					<h1 className='text-3xl md:text-5xl font-bold '>GOT BAG: </h1>
					<h1 className='text-3xl font-bold md:text-4xl'>
						World's first backpack made of recycled ocean plastic.
					</h1>
				</div>
				<p className='mt-5 md:mt-0 font-body text-lg'>
					In 2016, we started collecting plastic from the ocean, recycling it
					and processing it into backpacks. Since then, we've been able to
					steadily increase the capacity of our clean-up program and thus the
					amount of plastic we collect each month. Even beyond this, we are
					continuously increasing our impact: Based on scientific findings and
					on-site experience, we know that it is as important to prevent
					improperly disposed plastic waste to keep it from entering the ocean
					in the first place.
				</p>
			</div>
			<div className='grid grid-cols-1 gap-6 max-w-[1800px] p-10 md:grid-cols-2 md:p-20 '>
				<img src={rolltop} alt='' />
				<img src={rolltopLite} alt='' />
				<img src={weekender} alt='' />
				<img src={hipBag} alt='' />
			</div>

			<nav className='p-6 md:p-14 justify-between text-2xl flex'>
				<Link to={'/boreal'} className='flex items-center gap-2'>
					<div>
						<BsChevronLeft size={'2rem'} />
					</div>
					<p className='text-2xl font-bold font-header'>BOREAL</p>
				</Link>

				<Link to={'/haflinger'} className='flex items-center gap-2'>
					<p className='text-2xl font-bold font-header'>HAFLINGER</p>
					<div>
						<BsChevronRight size={'2rem'} />
					</div>
				</Link>
			</nav>
		</div>
	);
};

export default gotBag;
