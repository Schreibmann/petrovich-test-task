import { FETCH_PRODUCTS_DATA } from "../actions/types";

const initialState = {
  isFetching: true,
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_DATA:
      return {
        ...state,
        isFetching: false,
        products: action.products
      };
    default:
      return state;
  }
}
