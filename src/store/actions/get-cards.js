import callTypes from './../call-types';

export const getCardsRequest = (currentPage) => {
  return {
    type: callTypes.GET_CARDS_REQUEST,
    cards: null,
    currentPage,
    error: null
  };
};

export const getCardsSuccess = (response, currentPage) => {
  return {
    type: callTypes.GET_CARDS_SUCCESS,
    cards: response.data.cards,
    currentPage,
    error: null
  };
};

export const getCardsError = (error, currentPage) => {
  return {
    type: callTypes.GET_CARDS_ERROR,
    cards: null,
    currentPage,
    error
  };
};