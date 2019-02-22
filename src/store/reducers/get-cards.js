import callTypes from './../call-types';

const INITIAL_STATE = {};

export default function getCards(state = INITIAL_STATE, action) {
  switch (action.type) {
    case callTypes.GET_CARDS_REQUEST:
      return {
        cards: null,
        currentPage: action.currentPage,
        error: null
      };
    case callTypes.GET_CARDS_SUCCESS:
      return {
        cards: getCardsWithImage(action.cards),
        currentPage: action.currentPage,
        error: null
      };
    case callTypes.GET_CARDS_ERROR:
      return {
        cards: null,
        currentPage: action.currentPage,
        error: action.error
      };
    default:
      return state;
  }
};

/* utils */
const getCardsWithImage = (cards) => {
  return cards.filter(card => (card.imageUrl));
}