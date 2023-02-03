import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div
			id='error-page'
			className='h-screen flex text-center justify-center items-center'
		>
			<div className='p-7 flex flex-col gap-6'>
				<h1 className='text-4xl font-bold font-header'>Oops!</h1>
				<p className='font-body'>
					{' '}
					<span className='font-body text-slate-400 italic'>
						{error.statusText || error.message}
					</span>
					{' '}-{' '}An unexpected error has occurred.
				</p>

				<Link
					to={'/'}
					className='font-body text-indigo-500 outline rounded py-4 shadow-lg hover:bg-indigo-500 hover:text-white hover:outline-none hover:shadow-none transition duration-300'
				>
					Return Home
				</Link>
			</div>
		</div>
	);
}
