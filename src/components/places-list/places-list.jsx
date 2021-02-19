import React, {useState} from 'react';
import Card from '../card/card';
import PropTypes from 'prop-types';
import {offerType} from '../../propTypes/cities';


const PlacesList = (props) => {
  const {offers} = props;

  const [activeCard, setActiveCard] = useState(1);

  const getActiveCard = (id) => {
    setActiveCard(id);
  };

  return (
    <div className="near-places__list places__list" id={activeCard}>
      {offers.map((offer, i) => <Card key= {offer.id + i} offer={offer} getActiveCard={getActiveCard}/>)}
    </div>
  );
};


PlacesList.propTypes = {
  offers: PropTypes.arrayOf(offerType),
};

export default PlacesList;
