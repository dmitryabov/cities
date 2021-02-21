import React, {useState} from 'react';
import Card from '../card/card';
import PropTypes from 'prop-types';
import {offerType} from '../../propTypes/cities';
import {connect} from 'react-redux';


const OffersList = (props) => {
  const {offers} = props;

  const [activeCard, setActiveCard] = useState(1);

  const getActiveCard = (id) => {
    setActiveCard(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content" id={activeCard}>
      {offers.map((offer, i) => <Card key= {offer.id + i} offer={offer} getActiveCard={getActiveCard}/>)}
    </div>
  );
};


OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerType),
};



export default OffersList;
