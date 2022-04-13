import { combineReducers } from "redux";
import * as types from "./common.types";

// SET CATEGORY ACTIVE IN HEADER
const InitialActiveCategoryState = {
  activeCategory: "all",
};

const rSetCategoryActive = (state = InitialActiveCategoryState, action) => {
  switch (action.type) {
    case types.SET_CATEGORY_ACTIVE:
      return {
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

export default combineReducers({
  category: rSetCategoryActive,
  currency: rCurrency,
});
