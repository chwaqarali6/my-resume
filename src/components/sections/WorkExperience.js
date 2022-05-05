// REACT
import React from 'react'

import Bridgelinx from '../experience/Bridgelinx'
import WeOverI from '../experience/WeOverI'
import Freelance from '../experience/Freelance'

const WorkExperience = (props) => {
	return (
		<div className='flex h-full w-full flex-col'>
			<h2 className='text-6xl font-black uppercase'>Work Experience</h2>
			<Bridgelinx />
			<WeOverI />
			<Freelance />
		</div>
	)
}

export default WorkExperience
