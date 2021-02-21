import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';


const Location = ({cityName, activeCity, id, onActiveCity}) => {

  const onLocationClicjHandler = () => {
    onActiveCity(cityName);
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
  id: PropTypes.number.isRequired,
  onActiveCity: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  onActiveCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {Location};
export default connect(null, mapDispatchToProps)(Location);
