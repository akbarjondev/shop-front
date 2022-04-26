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

// CART
export const aSelectProduct = (data) => ({
  type: types.SELECT_PRODUCT,
  payload: data,
});

export const aEditProduct = (data) => ({
  type: types.EDIT_PRODUCT,
  payload: data,
});

export const aDeleteProduct = (data) => ({
  type: types.DELETE_PRODUCT,
  payload: data,
});

export const aAddOneProduct = (data) => ({
  type: types.ADD_ONE_PRODUCT,
  payload: data,
});

export const aRemoveOneProduct = (data) => ({
  type: types.REMOVE_ONE_PRODUCT,
  payload: data,
});

export const aCheckOut = (data) => ({
  type: types.CHECK_OUT,
  payload: data,
});
