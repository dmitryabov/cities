import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {offerType} from '../../propTypes/cities';
import {getRatingLevel} from '../../common/utils';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';


const Card = (props) => {
  const {offer, getActiveCard, setActivePin, resetActivePin} = props;
  const {id, title, price, rating, type, is_favorite} = offer;

  const onMouseEnterHandler = () => {
    getActiveCard(id);
    setActivePin(id);
  };


  return (
    <article className="cities__place-card place-card" onMouseEnter={onMouseEnterHandler} onMouseLeave={resetActivePin}>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image" id={id}/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${ is_favorite ? `place-card__bookmark-button--active` : ``} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <a href="#icon-bookmark"></a>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingLevel(rating)}`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>property
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};


Card.propTypes = {
  offer: offerType,
  getActiveCard: PropTypes.func.isRequired,
  setActivePin: PropTypes.func.isRequired,
  resetActivePin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setActivePin(pin) {
    dispatch(ActionCreator.changeActivePin(pin));
  },
  resetActivePin() {
    dispatch(ActionCreator.resetActivePin());
  },
});

export {Card};
export default connect(null, mapDispatchToProps)(Card);
