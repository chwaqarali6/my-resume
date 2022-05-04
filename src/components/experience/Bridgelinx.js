// REACT
import React from 'react'
// 3RD PARTY LIBRARIES
import { Timeline } from 'antd'

const Bridgelinx = (props) => {
	const TimelineItemLabel = () => (
		<div className='w-full pr-9 text-right'>
			<p className='mb-4'>Jan 2021 to Present</p>
			<p>1 year 4 months</p>
			<p className='text-gray-500'>Lahore, Pakistan</p>
		</div>
	)

	return (
		<Timeline.Item label={<TimelineItemLabel />}>
			<h3 className='mb-4 text-5xl font-bold'>Bridgelinx Technologies</h3>
			<p className='mb-9 font-light italic'>
				BridgeLinx is a digital marketplace for freight cargo that raised $10 million in the country’s largest seed round.
			</p>
			<div className='flex items-center justify-between'>
				<h3 className='text-5xl font-bold'>Web Engineer Lead</h3>
				<p className='font-light text-gray-500'>Sep 2021 to Present - 4 months</p>
			</div>
		</Timeline.Item>
	)
}

export default Bridgelinx
