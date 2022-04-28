import { combineReducers } from "redux";
import * as types from "./common.types";
import * as helpers from "./../helpers";

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

// CART
const initialCartState = {
  list: [
    // {
    //   productName: "Apple iMac 2021",
    //   product: "apple-imac-2021",
    //   quantity: 1,
    //   attributes: [
    //     {
    //       id: "size",
    //       value: "M",
    //     },
    //   ],
    // },
  ],
};
const rCart = (state = initialCartState, action) => {
  switch (action.type) {
    case types.SELECT_PRODUCT:
      let searchBeforeAdd = helpers.findedProduct(
        state.list,
        action.payload.product
      );

      if (searchBeforeAdd) {
        return {
          ...state,
          list: [
            ...state.list.filter(
              (item) => item.product !== searchBeforeAdd.product
            ),
            {
              ...searchBeforeAdd,
              quantity: searchBeforeAdd.quantity + 1,
            },
          ],
        };
      }

      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case types.ADD_ONE_PRODUCT:
      let findedProduct = helpers.findedProduct(
        state.list,
        action.payload.product
      );

      return {
        ...state,
        list: [
          ...state.list.filter(
            (item) => item.product !== findedProduct.product
          ),
          {
            ...findedProduct,
            inCart: true,
            quantity: ++findedProduct.quantity,
          },
        ],
      };

    case types.REMOVE_ONE_PRODUCT:
      let findRemoveProduct = helpers.findedProduct(
        state.list,
        action.payload.product
      );

      return {
        ...state,
        list: [
          ...state.list.filter(
            (item) => item.product !== findRemoveProduct.product
          ),
          {
            ...findRemoveProduct,
            inCart: findRemoveProduct.quantity - 1 === 0 ? false : true,
            quantity: --findRemoveProduct.quantity,
          },
        ],
      };

    case types.DELETE_PRODUCT:
      let deleteProduct = helpers.findedProduct(
        state.list,
        action.payload.product
      );

      return {
        ...state,
        list: [
          ...state.list.filter(
            (item) => item.product !== deleteProduct.product
          ),
        ],
      };

    case types.CHECK_OUT:
      return {
        list: [],
      };
    default:
      return state;
  }
};

export default combineReducers({
  currency: rCurrency,
  categories: rCategories,
  product: rProduct,
  cart: rCart,
});
