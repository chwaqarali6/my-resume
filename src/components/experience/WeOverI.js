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
			<BulletPoint text='Revamped WE>I’s website with ReactJS, GSAP (Greensock), Ant-Design and Netlify.' />
			<BulletPoint text='Worked with UI libraries like Ant-Design.' />
			<BulletPoint text='Learned and Implemented Animation libraries like GSAP.' />
			<BulletPoint text='Worked with Netlify for CI/CD and deployment of websites.' />
		</TimelineItem>
	)
}

export default WeOverI
