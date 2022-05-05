// REACT
import React from 'react'

const TimelineItem = (props) => {
	const { dotColor, time, duration, location, title, description } = props
	const Duration = () => (
		<div className='w-[364px] flex-shrink-0 text-right'>
			{time && <p className='mb-5 font-medium'>{time}</p>}
			{duration && <p>{duration}</p>}
			{location && <p className=' text-gray-500'>{location}</p>}
		</div>
	)

	const Dot = () => (
		<div className='mx-9 flex min-h-max w-12 flex-col items-center'>
			<div className='h-12 w-12 rounded-full' style={{ backgroundColor: dotColor }}></div>
			<div className='line mt-9 h-[calc(100%-72px)] border-l-4 border-[#BFBFBF]'></div>
		</div>
	)

	return (
		<div className='timelineItem mt-9 flex h-full w-full'>
			<Duration />
			<Dot />
			<div>
				<h3 className='mb-4 text-5xl font-bold'>{title}</h3>
				<p className='mb-9 font-light italic'>{description}</p>
				{props.children}
			</div>
		</div>
	)
}

export default TimelineItem
