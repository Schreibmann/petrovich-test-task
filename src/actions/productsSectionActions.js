import { FETCH_PRODUCTS_DATA } from './types';

export const fetchProductsData = () => dispatch => {
  fetch('products.json')
    .then(res => res.json())
    .then(products =>
      dispatch({
        type: FETCH_PRODUCTS_DATA,
        products: products
      })
    );
};

