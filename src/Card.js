import React from 'react';

const Card = (props) => {
	return(
		<div className='bg-light-green dib br3 pa1 ma2 grow bw2 shadow-5 tc'>
		
			<img alt='photos' src= {`https://robohash.org/${props.id}`} />

			<div>
				<h2> { props.name } </h2>
				<p> <strong>{ props.id } </strong></p>
				<p> <strong>{ props.username }</strong></p>
				<p> <strong>{ props.email }</strong> </p> 

			</div>
		</div>



		);
}
export default Card;