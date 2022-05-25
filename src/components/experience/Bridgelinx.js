// REACT
import React from 'react'
// COMPONENTS
import TimelineItem from '../utility/TimelineItem'
import BulletPoint from '../utility/BulletPoint'

const Bridgelinx = (props) => {
	const JobTitle = (props) => (
		<div className='flex items-center justify-between'>
			<h3 className='text-5xl font-bold'>{props?.title}</h3>
			<p className='font-light text-gray-500'>{props.duration}</p>
		</div>
	)

	return (
		<TimelineItem
			dotColor='#FFCB00'
			time='Jan 2021 to Present'
			duration='1 year 4 months'
			location='Lahore, Pakistan'
			title='Bridgelinx Technologies'
			description={`BridgeLinx is a digital marketplace for freight cargo that raised $10 million in the country's largest seed round.`}
		>
			<div className='mb-9'>
				<JobTitle title='Senior Web Engineer' duration='Sep 2021 to Present - 4 months' />
				<BulletPoint text='Received an early promotion and increment based on an outstanding performance in the engineering team, achieving 150% of the KPIs.' />
				<BulletPoint text='Leading a team of 3 web engineers with a additional responsibility of conducting tech interviews during hirings.' />
				<BulletPoint text='Collaborating with other teams for requirement gathering, understanding workflows and bringing creative ideas to the table.' />
				<BulletPoint text='Started code reviews to ensure similar coding practices across all codebases.' />
				<BulletPoint text='Shifted to Tailwind as the new CSS framework to further reduce the dev time.' />
				<BulletPoint text='Introduced team to Storybook and used it to build component driven UIs faster.' />
				<BulletPoint text='Building the new backend architecture with PostgreSQL, Node JS, Express, GraphQL and Sequelize (ORM) to replace Firestore.' />
			</div>
			<div>
				<JobTitle title='Web Engineer' duration='Jan 2021 to Sep 2021 - 9 months' />
				<BulletPoint text='Utilized both my coding and designing skills, as a founding team member, to design and build MVP products in the early stages of the startup.' />
				<BulletPoint text='Built 8+ web products from scratch, including internal-team products and client-facing products, in a span of mere 6 months.' />
				<BulletPoint text='Designed UIs of 2 MVP products on Figma at the early stages of the startup.' />
				<BulletPoint text='Coded apps in ReactJS (frontend library), Recoil (state-management) and Ant-Design (UI Component Library).' />
				<BulletPoint text='Designed database schemas and developed Firebase Cloud Functions (Node JS).' />
				<BulletPoint text='Set up git version control system and defined bitbucket repository protocols.' />
			</div>
		</TimelineItem>
	)
}

export default Bridgelinx
