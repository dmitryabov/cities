import PropTypes from "prop-types";

const reviewsType = PropTypes.shape({
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
}).isRequired;

export {reviewsType};
