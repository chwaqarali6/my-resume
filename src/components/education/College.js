// REACT
import React from 'react'
// COMPONENTS
import TimelineItem from '../utility/TimelineItem'
import BulletPoint from '../utility/BulletPoint'

const University = (props) => {
	return (
		<TimelineItem
			dotColor='#BFBFBF'
			time='2012 - 2014'
			location='Lahore, Pakistan'
			title='Forman Christian College and University (FCCU)'
			description='High School, Computer Science'
		>
			<BulletPoint text='Awarded with Valedictorion Award for my extraordinary performance in my second year of college.' />
			<BulletPoint text='Organized events and college trips during my short period as member of Computing Society, Rotract Club and Dramatics Society.' />
		</TimelineItem>
	)
}

export default University
