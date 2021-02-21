import { PlacesOptions } from "../const";

export const getRatingLevel = (level) => {
  return (level * 100) / 5 + `%`;
};

export const sortOffers = (offesrForOneCity, placesOptionActive) => {
  switch (placesOptionActive) {
    case PlacesOptions[1]:
      offesrForOneCity.sort((a, b) => a.price - b.price);
      break;
    case PlacesOptions[2]:
      offesrForOneCity.sort((a, b) => b.price - a.price);
      break;
    case PlacesOptions[3]:
      offesrForOneCity.sort((a, b) => b.rating - a.rating);
      break;
    default:
      offesrForOneCity;
  }
  return offesrForOneCity;
};
