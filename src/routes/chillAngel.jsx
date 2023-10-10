import React from 'react';
import top1 from '../assets/chillangel-top-3.webp';
import dress1 from '../assets/chillangel-dress-2.webp';
import top2 from '../assets/chillangel-top.webp';
import dress2 from '../assets/chillangel-dress.webp';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const chillAngel = () => {
	return (
		<div className='-mt-22 md:-mt-36 lg:-mt-46'>
			<div className='bg-chillAngel h-screen z-0 bg-cover bg-center bg-no-repeat'></div>
			<div className='flex flex-col m-6 sm:m-16 md:m-14 md:grid md:grid-cols-2 md:items-center min-h-[400px] whitespace-pre-wrap gap-5'>
				<div className='mt-24 md:mt-0 font-header w-2/3'>
					<h1 className='text-3xl md:text-5xl font-bold '>Chill Angel:</h1>
					<h1 className='text-3xl font-bold md:text-4xl'>
						Improving comfort with merino wool sleepwear.
					</h1>
					<Link
						to='https://chillangel.com/'
						className='text-sm hover:underline hover:text-white hover:bg-black transition-all duration-400'
					>
						Visit Chill Angel &rarr;
					</Link>
				</div>
				<p className='mt-5 md:mt-0 font-body text-lg'>
					Our mission is to improve the quality of life for women whose sleep is
					interrupted by body temperature fluctuations. Our sleepwear is made
					from 100% superfine merino wool, which has proven temperature and
					moisture managing properties. Sleeping in Chill Angel will promote a
					noticeably better night's rest for anyone that sleeps too hot, too
					cold or too sweaty.
				</p>
			</div>
			<div className='grid grid-cols-1 gap-6 max-w-[1800px] p-10 md:grid-cols-2 md:p-20 '>
				<img src={top2} alt='' />
				<img src={top1} alt='' />
				<img src={dress1} alt='' />
				<img src={dress2} alt='' />
			</div>

			<nav className='p-6 md:p-14 justify-between text-xl lg:text-2xl flex'>
				<Link to={'/boreal'} className='flex items-center gap-2'>
					<div>
						<BsChevronLeft size={'2rem'} />
					</div>
					<p className='font-bold font-header'>BOREAL</p>
				</Link>

				<Link to={'/emu-australia'} className='flex items-center gap-2'>
					<p className='font-bold font-header'>EMU AUSTRALIA</p>
					<div>
						<BsChevronRight size={'2rem'} />
					</div>
				</Link>
			</nav>
		</div>
	);
};

export default chillAngel;
