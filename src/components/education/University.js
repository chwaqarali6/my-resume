// REACT
import React from 'react'
// COMPONENTS
import TimelineItem from '../utility/TimelineItem'
import BulletPoint from '../utility/BulletPoint'

const University = (props) => {
	return (
		<TimelineItem
			dotColor='#0099CB'
			time='2014 - 2018'
			location='Lahore, Pakistan'
			title='National University of Computer and Emerging Sciences (FAST-NUCES)'
			description='Bachelors in Computer Sciences'
		>
			<BulletPoint text='Listed on Dean’s List for Fall 2014 semester.' />
			<BulletPoint text='Appointed as Competition Coordinator in Executive Team of SOFTEC 2018 where I led a massive team of 13 Department Heads, 30 Department Deputy-Heads and 600+ Volunteers.' />
		</TimelineItem>
	)
}

export default University
