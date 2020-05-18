import React from 'react';

const SearchBox = ({ searchField,searchChange}) => {
	return(
		<div className = 'pa0.5'>
			<input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='Search Robots' onChange={searchChange}/>
			
		</div>


		);
}

export default SearchBox;