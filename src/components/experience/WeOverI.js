// REACT
import React from 'react'
// 3RD PARTY LIBRARIES
import { Timeline } from 'antd'
import BulletPoint from '../utility/BulletPoint'

const WeOverI = (props) => {
	const TimelineItemLabel = () => (
		<div className='w-full pr-9 text-right'>
			<p className='mb-4 text-4xl'>Aug 2020 - Jan 2021</p>
			<p className='text-4xl'>6 months</p>
			<p className='text-4xl text-gray-500'>Lahore, Pakistan</p>
		</div>
	)

	return (
		<Timeline.Item label={<TimelineItemLabel />}>
			<h3 className='mb-4 text-5xl font-bold'>We Over I - React Engineer</h3>
			<p className='mb-9 font-light italic'>
				{`We > I (pronounced we-over-i) is a venture builder that partner with startups all over the world to merge talents and become an extension of their
				team.`}
			</p>
			<BulletPoint text='Revamped WE>I’s website with Reactjs, GSAP (Greensock), Ant Design and Netlify.' />
			<BulletPoint text='Worked with UI libraries like Ant Design.' />
			<BulletPoint text='Learned and Implemented Animation libraries like GSAP (Greensock).' />
			<BulletPoint text='Used Netlify for CI/CD and deployment of websites.' />
		</Timeline.Item>
	)
}

export default WeOverI
