import React from 'react';

const Pagination = (props) => {
	return (
		<div>
			<button type="button" onClick={props.getPreviousCards}>Anteriores</button>
			<span>{props.currentPage}</span>
			<button type="button" onClick={props.getNextCards}>Próximos</button>
		</div>
	);
};

export default Pagination;