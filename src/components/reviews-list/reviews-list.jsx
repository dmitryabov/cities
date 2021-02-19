import React from 'react';
import PropTypes from 'prop-types';
import ReviewsItem from './reviews-item';
import {reviewsType} from '../../propTypes/reviews';


const ReviewsList = ({cardReviews}) => {

  return (
    <ul className="reviews__list">
      {cardReviews.map((cardReview, i)=> {
        return (
          <ReviewsItem cardReview={cardReview} key={cardReview.id + i}/>
        );
      })}


    </ul>
  );
};


ReviewsList.propTypes = {
  cardReviews: PropTypes.arrayOf(reviewsType),
};

export default ReviewsList;
