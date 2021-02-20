import React, {useState} from 'react';
import PropTypes from 'prop-types';
import HeaderPage from '../header/header';
import OffersList from '../offers-list/offers-list';
import {offerType} from '../../propTypes/cities';
import MapOffers from '../map/map';
import Location from '../location/location';
import {connect} from 'react-redux';
import {CityNames} from '../../const';


const Main = (props) => {
  const { offers, city} = props;

  const copyOffers = offers.slice();

  let offesrForOneCity = copyOffers.filter((n) => n.city.name === CityNames[city]);


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
                  <Location cityName={cityName} key={cityName + i} id={i} activeCity={city === i ? true : false}/>
                );
              })}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offesrForOneCity.length} places to stay in Amsterdam</b>
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
            <div className="cities__right-section">
              <MapOffers offers={offesrForOneCity} classNameMap={`cities__map`}/>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
};

Main.propTypes = {
  offers: PropTypes.arrayOf(offerType),
  city: PropTypes.number.isRequired,
};

  const mapStateToProps = (state) => ({
    city: state.city,

  });



  export {Main};
  export default connect(mapStateToProps, null)(Main);
