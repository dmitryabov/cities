export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  FILL_OFFERS: `FILL_OFFERS`,
  PLACES_OPTION_ACTIVE: `PLACES_OPTION_ACTIVE`,
  PLACES_OPTION_ACTIVE: `PLACES_OPTION_ACTIVE`,
};

export const ActionCreator = {
  changeCity: (activeCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: activeCity,
  }),
  resetGame: (newOffers) => ({
    type: ActionType.FILL_OFFERS,
    payload: newOffers,
  }),
  changeActiveOption: (activeOption) => ({
    type: ActionType.PLACES_OPTION_ACTIVE,
    payload: activeOption,
  }),
};
