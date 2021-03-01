import React from 'react';
import HeaderPage from '../header/header';
import ReviewsForm from '../reviews_form/reviews_form';
import PropTypes from 'prop-types';
import {offerType} from '../../propTypes/cities';
import {reviewsType} from '../../propTypes/reviews';
import {getRatingLevel} from '../../common/utils';
import ReviewsList from '../reviews-list/reviews-list';
import MapOffers from '../map/map';
import PlacesList from '../places-list/places-list';
import {connect} from 'react-redux';


const Property = (props) => {
  const {offer, cardReviews, offers} = props;
  const {is_premium, is_favorite} = offer;



  return (
    <div className="page">
      <HeaderPage />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <div className="property__image-wrapper">
                <img className="property__image" src="img/room.jpg" alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img
                  className="property__image"
                  src="img/apartment-01.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="property__image-wrapper">
                <img
                  className="property__image"
                  src="img/apartment-02.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="property__image-wrapper">
                <img
                  className="property__image"
                  src="img/apartment-03.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="property__image-wrapper">
                <img
                  className="property__image"
                  src="img/studio-01.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="property__image-wrapper">
                <img
                  className="property__image"
                  src="img/apartment-01.jpg"
                  alt="Photo studio"
                />
              </div>
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              { is_premium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div>
                : ``
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.description}
                </h1>
                <button className={`property__bookmark-button ${ is_favorite ? `property__bookmark-button--active` : ``} button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use href="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getRatingLevel(offer.rating)}`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">{offer.type}</li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.max_adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.goods.map((property, i) => {
                    return <li className="property__inside-item" key={property + i}>{property}</li>;
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper"
                  >
                    <img
                      className="property__avatar user__avatar"
                      src="img/avatar-angelina.jpg"
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name"> {offer.host.name} </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
              A quiet cozy and picturesque that hides behind a a river by the
              unique lightness of Amsterdam. The building is green and from 18th
              century.
                  </p>
                  <p className="property__text">
              An independent House, strategically located between Rembrand
              Square and National Opera, but where the bustle of the city comes
              to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
            Reviews &middot; <span className="reviews__amount">{cardReviews.length}</span>
                </h2>
                <ReviewsList cardReviews={cardReviews}/>
                <ReviewsForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <MapOffers offers={offers} classNameMap={`property__map`}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesList offers={offers}/>
          </section>
        </div>
      </main>
    </div>
  );
};


Property.propTypes = {
  offer: offerType,
  cardReviews: PropTypes.arrayOf(reviewsType),
  offers: PropTypes.arrayOf(offerType),
};


const mapStateToProps = (state) => ({
  offers: state.offers,
});


export {Property};
export default connect(mapStateToProps, null)(Property);
