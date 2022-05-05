// REACT
import React from 'react'
// COMPONENTS
import Header from '../components/sections/Header'
import Summary from '../components/sections/Summary'
import WorkExperience from '../components/sections/WorkExperience'

const Resume = (props) => {
	return (
		<div id='Resume' className='w-[2480px]'>
			<Header />
			<div className='w-full px-48'>
				<Summary />
				<WorkExperience />
			</div>
		</div>
	)
}

export default Resume
