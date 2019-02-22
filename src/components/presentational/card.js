import React from 'react';

const Card = (props) => {
	return (
		<div className="card-list__image-item">
			<img src={props.image} alt={props.name} className="card-list__image" />
			<ul className="card-list__data">
				<li className="card-list__data-item">
					<strong>Name:</strong> {props.name}
				</li>
				<li className="card-list__data-item">
					<strong>Type:</strong> {props.type}
				</li>
			</ul>
		</div>
	);
};

export default Card;