import { gql } from "@apollo/client";

export const getListOfCategories = gql`
  query {
    categories {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            id
            displayValue
            value
          }
        }
        brand
        prices {
          currency {
            label
          }
          amount
        }
      }
    }
  }
`;

export const getCategories = gql`
  query {
    categories {
      name
    }
  }
`;

export const getCurrencies = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;
