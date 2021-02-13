import React from 'react';
import HeaderPage from '../header/header';
import PropTypes from 'prop-types';
import {offerType} from '../../propTypes/cities';
import FavoritesList from '../favorites__list/favorites__list';


const Favorites = (props) => {
  const {offers} = props;


  return (
    <div className="page">
      <HeaderPage/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={offers}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
};


Favorites.propTypes = {
  offers: PropTypes.arrayOf(offerType),
};

export default Favorites;
