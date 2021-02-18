import React from 'react';
import PropTypes from 'prop-types';


const Location = ({cityName, activeCity, getActiveCard, id}) => {

  const onLocationClicjHandler = () => {
    getActiveCard(id);
  };

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item  ${activeCity ? `tabs__item--active` : ``}`} onClick={onLocationClicjHandler}>
        <span>{cityName}</span>
      </a>
    </li>
  );
};


Location.propTypes = {
  cityName: PropTypes.string.isRequired,
  activeCity: PropTypes.bool.isRequired,
  getActiveCard: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Location;
