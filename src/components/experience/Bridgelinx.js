// REACT
import React from 'react'
// 3RD PARTY LIBRARIES
import { Timeline } from 'antd'
import BulletPoint from '../utility/BulletPoint'

const Bridgelinx = (props) => {
	const TimelineItemLabel = () => (
		<div className='w-full pr-9 text-right'>
			<p className='mb-4 text-4xl'>Jan 2021 to Present</p>
			<p className='text-4xl'>1 year 4 months</p>
			<p className='text-4xl text-gray-500'>Lahore, Pakistan</p>
		</div>
	)

	const JobTitle = (props) => (
		<div className='flex items-center justify-between'>
			<h3 className='text-5xl font-bold'>{props?.title}</h3>
			<p className='font-light text-gray-400'>{props.duration}</p>
		</div>
	)

	return (
		<Timeline.Item label={<TimelineItemLabel />} className='YellowDot'>
			<h3 className='mb-4 text-5xl font-bold'>BridgeLinx Technologies</h3>
			<p className='mb-9 font-light italic'>
				BridgeLinx is a digital marketplace for freight cargo that raised $10 million in the country’s largest seed round.
			</p>
			<div className='mb-9'>
				<JobTitle title='Web Engineering Lead' duration='Sep 2021 to Present - 4 months' />
				<BulletPoint text='Received an early promotion and increment based on an outstanding performance in the engineering team and on achieving 150% of the KPIs.' />
				<BulletPoint text='Leading a team of 3 web engineers with a additional responsibility of conducting tech interviews during hirings.' />
				<BulletPoint text='Collaborating with other teams for requirement gathering, understanding workflows and bringing creative ideas to the table.' />
				<BulletPoint text='Started code reviews to ensure similar coding practices across all codebases.' />
				<BulletPoint text='Shifted to Tailwind as the new CSS framework to further reduce the dev time.' />
				<BulletPoint text='Introduced team to StorybookUI and used it to build component driven UIs faster.' />
				<BulletPoint text='Building the new backend architecture with PostgreSQL, Nodejs, Express, GraphQL and Sequelize (ORM).' />
			</div>
			<div className='mb-16'>
				<JobTitle title='Web Engineer' duration='Jan 2021 to Sep 2021 - 9 months' />
				<BulletPoint text='Utilized both my coding and designing skills, as a founding team member, to design and build MVP products in the early stages of the startup.' />
				<BulletPoint text='Built 8+ web products from scratch, including internal-team products and client-facing products, in a span of mere 6 months.' />
				<BulletPoint text='Designed UIs of 2 MVP products on Figma at the early stages of the startup.' />
				<BulletPoint text='Coded apps in Reactjs (frontend library) and Recoil (state-management) and Ant-Design (UI Component Library).' />
				<BulletPoint text='Designed database schemas and developed Firebase Cloud Functions (Nodejs).' />
				<BulletPoint text='Set up git version control system and defined bitbucket repository protocols.' />
			</div>
		</Timeline.Item>
	)
}

export default Bridgelinx
