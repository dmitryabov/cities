export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  FILL_OFFERS: `FILL_OFFERS`,
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
};
