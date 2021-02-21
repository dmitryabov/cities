import React from 'react';
import {reviewsType} from '../../propTypes/reviews';
import {getRatingLevel} from '../../common/utils';


const ReviewsItem = ({cardReview}) => {
  const {user, rating, comment, date} = cardReview;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src="img/avatar-max.jpg"
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name"> {user.name} </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getRatingLevel(rating)}`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={new Date(date).toLocaleString(`en-CA`, {dateStyle: `short`})}
        >{new Date(date).toLocaleString(`en-CA`, {dateStyle: `long`})}</time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  cardReview: reviewsType,
};


export default ReviewsItem;
