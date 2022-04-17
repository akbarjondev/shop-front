import { combineReducers } from "redux";
import * as types from "./common.types";

// CATEGORIES
const initialCategories = {
  list: [],
  activeCategory: "all",
};
const rCategories = (state = initialCategories, action) => {
  switch (action.type) {
    case types.LIST_CATEGORIES:
      return {
        ...state,
        list: action.payload,
      };
    case types.SET_CATEGORY_ACTIVE:
      return {
        ...state,
        activeCategory: action.payload,
      };
    default:
      return state;
  }
};

// OPEN AND SELECT CURRENCY
const initialCurrencyState = {
  isOpen: false,
  currentCurrency: {
    symbol: "$",
    label: "USD",
  },
};

const rCurrency = (state = initialCurrencyState, action) => {
  switch (action.type) {
    case types.IS_CURRENCY_OPEN:
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    case types.SET_CURRENCY:
      return {
        ...state,
        currentCurrency: action.payload,
      };

    default:
      return state;
  }
};

// PRODUCT
const initialProduct = {
  selectedImageURL: "",
  selectedSize: "M",
};
const rProduct = (state = initialProduct, action) => {
  switch (action.type) {
    case types.SET_ACTIVE_IMAGE:
      return {
        ...state,
        selectedImageURL: action.payload,
      };
    case types.SET_ACTIVE_SIZE:
      return {
        ...state,
        selectedSize: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  currency: rCurrency,
  categories: rCategories,
  product: rProduct,
});
