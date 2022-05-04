// REACT
import React from 'react'
// COMPONENTS
import Header from '../components/Header'
import Summary from '../components/Summary'
import WorkExperience from '../components/WorkExperience'

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
