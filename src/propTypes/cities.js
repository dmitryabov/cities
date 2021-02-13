import PropTypes from "prop-types";

const offerType = PropTypes.shape({
  bedrooms: PropTypes.number.isRequired,
  city: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  goods: PropTypes.array.isRequired,
  host: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  is_favorite: PropTypes.bool.isRequired,
  is_premium: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  max_adults: PropTypes.number.isRequired,
  preview_image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}).isRequired;

export {offerType};
