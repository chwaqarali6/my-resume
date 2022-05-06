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
				<p>
					<span>Created a custom theme on WordPress using PHP, HTML, CSS and Javascript to showcase projects on my </span>
					<a className='cursor-pointer text-blue-500 underline' href='http://www.chwaqarali.com/' target='_blank' rel='noreferrer'>
						portfolio website
					</a>
					.
				</p>
			</BulletPoint>
			<BulletPoint>
				<p>
					<span>Worked on branding projects showcased on </span>
					<a className='cursor-pointer text-blue-500 underline' href='https://www.instagram.com/gattoographics/' target='_blank' rel='noreferrer'>
						Gattoo Graphics
					</a>
					.
				</p>
			</BulletPoint>
			<BulletPoint>
				<p>
					<span>Developed a spaced repetition schedular app named </span>
					<a className='cursor-pointer text-blue-500 underline' href='https://www.instagram.com/p/CGvWxUuAHXc/' target='_blank' rel='noreferrer'>
						Interrupt
					</a>
					<span> using SwiftUI for iOS.</span>
				</p>
			</BulletPoint>
			<BulletPoint>
				<div>
					<p>Learned and worked on new frontend frameworks like ReactJS.</p>
					<p className='text-4xl italic text-gray-500'>
						<span>* Learned ReactJS by working on a </span>
						<a className='cursor-pointer text-blue-500 underline' href='https://mymoviebase.netlify.app/' target='_blank' rel='noreferrer'>
							sample project
						</a>
						. *
					</p>
				</div>
			</BulletPoint>
			<BulletPoint text='Rated 5 stars on all deliverables won on freelancing websites (Fiverr and Upwork) and reached seller Level One starting from Beginner in mere 1 month.' />
		</TimelineItem>
	)
}

export default Freelance
