// REACT
import React from 'react'
import { Timeline } from 'antd'

import Bridgelinx from './experience/Bridgelinx'

const WorkExperience = (props) => {
	return (
		<div className='flex w-full flex-col'>
			<h2 className='mb-10 text-6xl font-black uppercase'>Work Experience</h2>
			<Timeline mode='left' className='w-full'>
				<Bridgelinx />
			</Timeline>
		</div>
	)
}

export default WorkExperience
