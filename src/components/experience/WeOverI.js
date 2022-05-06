// REACT
import React from 'react'
// COMPONENTS
import TimelineItem from '../utility/TimelineItem'
import BulletPoint from '../utility/BulletPoint'

const WeOverI = (props) => {
	return (
		<TimelineItem
			dotColor='#BFBFBF'
			time='Aug 2020 - Jan 2021'
			duration='6 months'
			location='Lahore, Pakistan'
			title='We Over I - React Engineer'
			description={`We > I (pronounced we-over-i) is a venture builder that partner with startups all over the world to merge talents and become an extension of their team.`}
		>
			<BulletPoint>
				<a href='https://weoveri.netlify.app/' target='_blank' rel='noreferrer'>
					<span>Revamped </span>
					<span className='cursor-pointer text-blue-500 underline'>{`WE>I's website`}</span>
					<span> website with ReactJS, GSAP, Ant-Design and Netlify.</span>
				</a>
			</BulletPoint>
			<BulletPoint text='Worked with UI libraries like Ant-Design.' />
			<BulletPoint text='Learned and Implemented Animation libraries like GSAP (Greensock).' />
			<BulletPoint bullet={false}>
				<a className='text-4xl italic text-gray-500' href='https://tentwenty-assessment.netlify.app/' target='_blank' rel='noreferrer'>
					<span>* Learned GSAP by working on a </span>
					<span className='cursor-pointer text-blue-500 underline'>sample project</span>. *
				</a>
			</BulletPoint>
			<BulletPoint text='Worked with Netlify for CI/CD and deployment of websites.' />
		</TimelineItem>
	)
}

export default WeOverI
