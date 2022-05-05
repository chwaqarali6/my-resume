// REACT
import React from 'react'

const Header = (props) => {
	return (
		<div className='flex h-[680px] justify-center bg-black'>
			<div className='relative mr-40 h-full w-[680px] overflow-hidden'>
				<img className='absolute -top-6' src={require('../../assets/img/Me.png')} alt='Me' />
			</div>
			<div className='flex h-full flex-col items-center justify-center text-white'>
				<h1 className='text-8xl font-light text-white'>
					Chaudhry <span className='font-bold'>Waqar</span> Ali
				</h1>
				<p>
					<a className='hover:text-white' href='tel:+923244550066'>
						+92 324 4550066
					</a>
					<span className='mx-4'>-</span>
					<a className='hover:text-white' href='mailto:chwaqarali6@gmail.com'>
						chwaqarali6@gmail.com
					</a>
				</p>
				<p className='mb-9 text-4xl font-light opacity-60'>Main Boulevard Defence, Lahore, Punjab, Pakistan</p>
				<a
					className='flex h-20 w-[472px] items-center justify-center rounded-lg bg-white font-light text-black'
					href='https://www.chwaqarali.com'
					target='_blank'
				>
					www.chwaqarali.com
				</a>
				<div className='flex items-center'>
					<a className='mx-3 cursor-pointer p-9' href='https://www.instagram.com/gattoographics/' target='_blank'>
						<img src={require('../../assets/icons/Instagram.png')} alt='Instagram' width='50' height='50' />
					</a>
					<a className='mx-3 cursor-pointer p-9' href='https://www.linkedin.com/in/chwaqarali6/' target='_blank'>
						<img src={require('../../assets/icons/LinkedIn.png')} alt='LinkedIn' width='50' height='50' />
					</a>
					<a className='mx-3 cursor-pointer p-9' href='https://github.com/chwaqarali6/' target='_blank'>
						<img src={require('../../assets/icons/Github.png')} alt='Github' width='50' height='50' />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Header
