// REACT
import React from 'react'

const BulletPoint = (props) => {
	return (
		<div className='flex font-light'>
			{props.bullet !== false ? <p className='mr-4'>-</p> : <p className='mr-4 text-white'>-</p>}
			{props.text && <p>{props.text}</p>}
			{props.children}
		</div>
	)
}

export default BulletPoint
