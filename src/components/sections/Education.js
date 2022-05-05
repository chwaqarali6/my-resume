// REACT
import React from 'react'
// COMPONENTS
import University from '../education/University'
import College from '../education/College'

const Education = (props) => {
	return (
		<div className='flex h-full w-full flex-col'>
			<h2 className='text-6xl font-black uppercase'>Education</h2>
			<University />
			<College />
		</div>
	)
}

export default Education
