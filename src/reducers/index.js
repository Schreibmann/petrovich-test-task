import { combineReducers } from 'redux';
import productsSectionReducer from './productsSectionReducer';

export default combineReducers({
  productsSection: productsSectionReducer
});
