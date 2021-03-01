import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import HeaderPage from '../header/header';
import OffersList from '../offers-list/offers-list';
import {offerType} from '../../propTypes/cities';
import MapOffers from '../map/map';
import Location from '../location/location';
import {connect} from 'react-redux';
import {CityNames} from '../../const';
import PlacesSorting from '../places-sorting/places-sorting';
import {sortOffers} from '../../common/utils';


const Main = (props) => {
  const {offers, city, placesOptionActive} = props;


  const copyOffers = offers.slice();


  let offesrForOneCity = copyOffers.filter((n) => n.city.name === city);

  let sortedOffers = sortOffers(offesrForOneCity, placesOptionActive);


  return (
    <div className="page page--gray page--main">
      <HeaderPage />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CityNames.map((cityName, i) => {
                return (
                  <Location cityName={cityName} key={cityName + i} id={i} activeCity={city === CityNames[i] ? true : false}/>
                );
              })}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{sortedOffers.length} places to stay in {city}</b>
              <PlacesSorting/>
              <OffersList offers={sortedOffers}/>
            </section>
            <div className="cities__right-section">
              <MapOffers offers={sortedOffers} classNameMap={`cities__map`}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: PropTypes.arrayOf(offerType),
  city: PropTypes.string.isRequired,
  placesOptionActive: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  city: state.city,
  placesOptionActive: state.placesOptionActive,
});




export {Main};
export default connect(mapStateToProps, null)(Main);
