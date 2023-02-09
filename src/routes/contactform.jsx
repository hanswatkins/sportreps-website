import React from 'react';

const contactform = () => {
	return (
		<div
			id='contact'
			className=' flex justify-center items-center text-center mx-auto max-w-7xl bg-white bg-boreal h-screen bg-no-repeat '
		>
			<form
				autocomplete='off'
				name='contact'
				method='post'
				action='/form/success'
			>
				<h1 className='text-white text-3xl m-6'>Contact Me</h1>
				<input class='input' type='hidden' name='form-name' value='contact' />

				<p>
					<label htmlFor='name'>
						<input
							placeholder='Name'
							className='p-2 py-1 focus:scale-110 focus:outline-gray-600 w-90'
							type='text'
							name='name'
							required
						/>
					</label>
				</p>
				<p>
					<label htmlFor='email'>
						<input
							placeholder='Email'
							className=' focus:scale-110 focus:outline-gray-600 py-1 p-2 my-3'
							type='email'
							name='email'
							required
						/>
					</label>
				</p>
				<p>
					<label htmlFor='message'>
						<textarea
							placeholder='Message'
							className=' resize-none focus:scale-110  focus:outline-gray-600 py-1 p-2 my-3'
							name='message'
							required
						></textarea>
					</label>
				</p>
				<p>
					<button
						className='bg-white px-4 py-2 mb-4 shadow-sm hover:shadow-none hover:scale-95'
						type='submit'
					>
						Send
					</button>
				</p>
			</form>
		</div>
	);
};

export default contactform;
