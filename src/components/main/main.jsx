import React, {useState} from 'react';
import PropTypes from 'prop-types';
import HeaderPage from '../header/header';
import OffersList from '../offers-list/offers-list';
import {offerType} from '../../propTypes/cities';
import MapOffers from '../map/map';
import Location from '../location/location';


const Main = (props) => {
  const {placesCount, offers} = props;

  const [activeCity, setActiveCity] = useState(0);

  const getActiveCard = (activ) => {
    setActiveCity(activ);
  };


  const uniqueCityNames = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

  const copyOffers = offers.slice();

  let offesrForOneCity = copyOffers.filter((n) => n.city.name === uniqueCityNames[activeCity]);


  return (
    <div className="page page--gray page--main">
      <HeaderPage />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {uniqueCityNames.map((cityName, i) => {
                return (
                  <Location cityName={cityName} key={cityName + i} id={i} activeCity={activeCity === i ? true : false} getActiveCard={getActiveCard}/>
                );
              })}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                   Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <a href="#icon-arrow-select"></a>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <OffersList offers={offesrForOneCity}/>
            </section>
            <MapOffers offers={offesrForOneCity}/>
          </div>
        </div>
      </main>
    </div>

  );
};

Main.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(offerType)};

export default Main;
