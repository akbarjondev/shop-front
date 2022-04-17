import * as types from "./common.types";

// CATEGORIES
export const aSaveCategories = (data) => ({
  type: types.LIST_CATEGORIES,
  payload: data,
});

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

// PRODUCT
export const aSetActiveImage = (data) => ({
  type: types.SET_ACTIVE_IMAGE,
  payload: data,
});

export const aSetSize = (data) => ({
  type: types.SET_ACTIVE_SIZE,
  payload: data,
});
