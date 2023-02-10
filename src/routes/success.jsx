import React from 'react';
import { Link } from 'react-router-dom';

const success = () => {
	return (
		<div className='h-3/4-screen flex flex-col justify-center items-center'>
			<h1 className='text-3xl md:text-4xl'>Thanks for reaching out!</h1>
			<Link
				to={'/'}
				className='font-body text-indigo-500 outline rounded py-4 shadow-lg hover:bg-indigo-500 hover:text-white hover:outline-none hover:shadow-none transition duration-300 m-8 px-3'
			>
				Return Home
			</Link>
		</div>
	);
};

export default success;
