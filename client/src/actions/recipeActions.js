import axios from 'axios';
import { LOADING_RECIPE, GET_RECIPE } from './types';

export const setLoadingRecipe = () => {
  return {
    type: LOADING_RECIPE
  };
};

export const getRecipe = () => dispatch => {
  dispatch(setLoadingRecipe());
  
  axios.get('/api/recipe/list').then(res => {
    dispatch({
      type: GET_RECIPE,
      payload: res.data
    });
  
  });
};
