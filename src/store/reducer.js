import { ActionType } from "./action";
import { CityNames, FIRST_CITY, PlacesOptions } from "../const";

const initialState = {
  city: CityNames[FIRST_CITY],
  offers: [],
  placesOptionActive: PlacesOptions[0],
  activePin: null,
  isDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };

    case ActionType.PLACES_OPTION_ACTIVE:
      return {
        ...state,
        placesOptionActive: action.payload,
      };

    case ActionType.ACTIVE_PIN:
      return {
        ...state,
        activePin: action.payload,
      };

    case ActionType.RESET_ACTIVE_PIN:
      return {
        ...state,
        activePin: null,
      };

    case ActionType.LOAD_HOTELS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
  }

  return state;
};

export { reducer };
