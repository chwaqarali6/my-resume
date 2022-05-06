// REACT
import React from 'react'
// COMPONENTS
import TimelineItem from '../utility/TimelineItem'
import BulletPoint from '../utility/BulletPoint'

const Freelance = (props) => {
	return (
		<TimelineItem
			dotColor='#BFBFBF'
			time='Jan 2019 - Aug 2020'
			duration='1 year 7 months'
			location='Remote'
			title='Extendev - Co Founder'
			description={`Extendev (pronounced Extend-Dev) provided tech and design support to freelance projects and small scale startups.`}
		>
			<BulletPoint text='Utilized both my coding and designing skills, to develop quality web and mobile apps with branding work and social media post designs.' />
			<BulletPoint>
				<a href='http://www.chwaqarali.com/' target='_blank' rel='noreferrer'>
					<span>Created a custom theme on WordPress using PHP, HTML, CSS and Javascript to showcase projects on my </span>
					<span className='cursor-pointer text-blue-500 underline'>portfolio website</span>
				</a>
			</BulletPoint>
			<BulletPoint>
				<a href='https://www.instagram.com/gattoographics/' target='_blank' rel='noreferrer'>
					<span>Worked on branding projects showcased on </span>
					<span className='cursor-pointer text-blue-500 underline'>Gattoo Graphics</span>.
				</a>
			</BulletPoint>
			<BulletPoint>
				<a href='https://www.instagram.com/p/CGvWxUuAHXc/' target='_blank' rel='noreferrer'>
					<span>Developed a spaced repetition schedular app named </span>
					<span className='cursor-pointer text-blue-500 underline'>Interrupt</span>
					<span> using SwiftUI for iOS.</span>
				</a>
			</BulletPoint>
			<BulletPoint text='Learned and worked on new frontend frameworks like ReactJS.' />
			<BulletPoint bullet={false}>
				<a className='text-4xl italic text-gray-500' href='https://mymoviebase.netlify.app/' target='_blank' rel='noreferrer'>
					<span>* Learned ReactJS by working on a </span>
					<span className='cursor-pointer text-blue-500 underline'>sample project</span>. *
				</a>
			</BulletPoint>
			<BulletPoint text='Rated 5 stars on all deliverables won on freelancing websites (Fiverr and Upwork) and reached seller Level One starting from Beginner in mere 1 month.' />
		</TimelineItem>
	)
}

export default Freelance
