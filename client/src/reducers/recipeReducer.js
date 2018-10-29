import { LOADING_RECIPE, GET_RECIPE } from '../actions/types';

const initialState = {
  recipes: {},
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_RECIPE:
      return {
        ...state,
        loading: true
      };
    case GET_RECIPE:
      return {
        ...state,
        recipes: action.payload,
        loading: false
      };

    default:
      return state;

  }
};
