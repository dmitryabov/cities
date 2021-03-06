import React from 'react';
import PropTypes from 'prop-types';
import {offerType} from '../../propTypes/cities';
import {getRatingLevel} from '../../common/utils';
import {Link} from 'react-router-dom';


const FavoritesList = (props) => {
  const {offers} = props;


  const favoriteOffers = offers.filter((person) => person.is_favorite === true);

  const identicalСities = favoriteOffers.reduce((offer, i) => {
    offer[i.city.name] = offer[i.city.name] || [];
    offer[i.city.name].push(i);

    return offer;
  }, {});


  const setSameOffers = () => {
    const sameOffers = [];
    for (let key in identicalСities) {
      sameOffers.push(identicalСities[key]);
    }
    return sameOffers;
  };

  let sameOffers = setSameOffers();

  return (
    <ul className="favorites__list">
      {sameOffers.map((cities, i) => {
        return (
          <li className="favorites__locations-items" key={cities[0].id + i}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{cities[0].city.name}</span>
                </a>
              </div>
            </div>

            <div className="favorites__places">
              {
                cities.map((offer, j) => {
                  return (
                    <article className="favorites__card place-card" key={offer.id + j}>
                      <div className="favorites__image-wrapper place-card__image-wrapper">
                        <Link to={`/offer/${offer.id}`}>
                          <img className="place-card__image" src="img/room.jpg" width="150" height="110" alt="Place image" id={offer.id}/>
                        </Link>
                      </div>
                      <div className="favorites__card-info place-card__info">
                        <div className="place-card__price-wrapper">
                          <div className="place-card__price">
                            <b className="place-card__price-value">&euro;{offer.price}</b>
                            <span className="place-card__price-text">&#47;&nbsp;night</span>
                          </div>
                          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                            <svg className="place-card__bookmark-icon" width="18" height="19">
                              <use href="#icon-bookmark"></use>
                            </svg>
                            <span className="visually-hidden">In bookmarks</span>
                          </button>
                        </div>
                        <div className="place-card__rating rating">
                          <div className="place-card__stars rating__stars">
                            <span style={{width: `${getRatingLevel(offer.rating)}`}}></span>
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <h2 className="place-card__name">
                          <a href="#">{offer.goods.join(`, `)}</a>
                        </h2>
                        <p className="place-card__type">{offer.type}</p>
                      </div>
                    </article>
                  );
                })
              }
            </div>
          </li>);
      })}
    </ul>
  );
};


FavoritesList.propTypes = {
  offers: PropTypes.arrayOf(offerType),
};


export default FavoritesList;
