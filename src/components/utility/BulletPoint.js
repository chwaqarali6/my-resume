// REACT
import React from 'react'

const BulletPoint = (props) => {
	return (
		<div className='flex font-light'>
			<p className='mr-4'>-</p>
			<p>{props.text}</p>
		</div>
	)
}

export default BulletPoint
