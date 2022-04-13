import * as types from "./common.types";

// CATEGORY
export const aSetCategoryActive = (data) => ({
  type: types.SET_CATEGORY_ACTIVE,
  payload: data,
});

// CURRENCY
export const aCurrencyOpen = () => ({
  type: types.IS_CURRENCY_OPEN,
});

export const aSetCurrency = (data) => ({
  type: types.SET_CURRENCY,
  payload: data,
});
