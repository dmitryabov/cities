import { ActionType } from "./action";
import { FIRST_CITY, CityNames } from "../const";
import offers from "../mocks/offers";

const initialState = {
  city: 0,
  offers,
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
  }

  return state;
};

export { reducer };
