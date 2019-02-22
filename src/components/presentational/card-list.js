import React from 'react';

import Card from './card';

const CardList = (props) => {
	return (
		<div className="card-list">
      { props.cards.map(card => (
          <Card
            key={card.multiverseid + ' ' + card.setName}
            image={card.imageUrl} name={card.name}
            type={card.type}
          />
        ))
      }
    </div>
	);
};

export default CardList;