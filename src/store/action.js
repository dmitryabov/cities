export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  PLACES_OPTION_ACTIVE: `PLACES_OPTION_ACTIVE`,
  ACTIVE_PIN: `ACTIVE_PIN`,
  RESET_ACTIVE_PIN: ` RESET_ACTIVE_PIN`,
};

export const ActionCreator = {
  changeCity: (activeCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: activeCity,
  }),

  changeActiveOption: (activeOption) => ({
    type: ActionType.PLACES_OPTION_ACTIVE,
    payload: activeOption,
  }),

  changeActivePin: (activePin) => ({
    type: ActionType.ACTIVE_PIN,
    payload: activePin,
  }),

  resetActivePin: () => ({
    type: ActionType.RESET_ACTIVE_PIN,
  }),
};
