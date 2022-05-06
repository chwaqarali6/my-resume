// REACT
import React from 'react'

const BulletPoint = (props) => {
	return (
		<div className='flex font-light'>
			<p className='mr-4'>-</p>
			{props.text && <p>{props.text}</p>}
			{props.children}
		</div>
	)
}

export default BulletPoint
