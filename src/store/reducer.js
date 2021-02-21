import { ActionType } from "./action";
import offers from "../mocks/offers";
import { CityNames, FIRST_CITY, PlacesOptions } from "../const";

const initialState = {
  city: CityNames[FIRST_CITY],
  offers,
  placesOptionActive: PlacesOptions[0],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };

    case ActionType.FILL_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };

    case ActionType.PLACES_OPTION_ACTIVE:
      return {
        ...state,
        placesOptionActive: action.payload,
      };
  }

  return state;
};

export { reducer };
