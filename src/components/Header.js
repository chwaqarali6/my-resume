// REACT
import React from 'react'

const Header = (props) => {
	return (
		<div className='mb-28 h-[680px] bg-black'>
			<div className='flex h-full flex-col items-center justify-center text-white'>
				<h1 className='text-8xl font-light text-white'>
					Chaudhry <span className='font-bold'>Waqar</span> Ali
				</h1>
				<p>+92 324 4550066 - chwaqarali6@gmail.com</p>
				<p className='mb-9 text-4xl font-light opacity-60'>Main Boulevard Defence, Lahore, Punjab, Pakistan</p>
				<p className='mb-9 flex h-20 w-[472px] items-center justify-center rounded-lg bg-white font-light text-black'>www.chwaqarali.com</p>
				<div className='flex items-center'>
					<img src={require('../assets/icons/Instagram.png')} alt='Instagram' width='50' height='50' className='mr-24' />
					<img src={require('../assets/icons/LinkedIn.png')} alt='LinkedIn' width='50' height='50' className='mr-24' />
					<img src={require('../assets/icons/Github.png')} alt='Github' width='50' height='50' />
				</div>
			</div>
		</div>
	)
}

export default Header
