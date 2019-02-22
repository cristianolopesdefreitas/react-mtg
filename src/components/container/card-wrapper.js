import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardService from './../../services/card-service';
import { getCardsRequest, getCardsSuccess, getCardsError } from './../../store/actions/get-cards';
import CardList from './../presentational/card-list';
import Pagination from './../presentational/pagination';

const PAGE_SIZE = 100;
const INITIAL_PAGE_NUMBER = 1;
const END_PAGE_NUMBER = 449;

class CardWrapper extends Component {
  constructor() {
    super();

    this.cardService = new CardService();
  }

  componentDidMount() {
    this.getCards();
  }

  getCards(page = INITIAL_PAGE_NUMBER) {
    this.props.getCardsRequest(page);

    this.cardService
      .getCards(PAGE_SIZE, page)
      .then(response => {
        this.props.getCardsSuccess(response, page);
      })
      .catch(error => {
        this.props.getCardsError(error, page);
      });
  }

  getNextCards() {
    let { currentPage } = this.props;
    let page = currentPage < END_PAGE_NUMBER ? currentPage + 1 : INITIAL_PAGE_NUMBER;
  
    return this.getCards(page);
  };
  
  getPreviousCards() {
    let { currentPage } = this.props;
    let page = currentPage === 1 ? END_PAGE_NUMBER : currentPage - 1;
  
    return this.getCards(page);
  };

  render() {
    return (
      <div className="card-wrapper">
        { this.props.cards &&
          <React.Fragment>
            <Pagination
              getPreviousCards={this.getPreviousCards.bind(this)}
              getNextCards={this.getNextCards.bind(this)}
              currentPage={this.props.currentPage}
            />

            <CardList
              cards={this.props.cards}
            />

            <Pagination
              getPreviousCards={this.getPreviousCards.bind(this)}
              getNextCards={this.getNextCards.bind(this)}
              currentPage={this.props.currentPage}
            />
          </React.Fragment>
        }
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    cards: state.getCards.cards,
    currentPage: state.getCards.currentPage,
    error: state.getCards.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCardsRequest: (page) => dispatch(getCardsRequest(page)),
    getCardsSuccess: (response, currentPage) => dispatch(getCardsSuccess(response, currentPage)),
    getCardsError: (error, currentPage) => dispatch(getCardsError(error, currentPage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardWrapper);