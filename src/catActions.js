import CatApi from './CatApi';
import * as types from './actionTypes';

export function loadCats() {
  return function(dispatch) {
    return CatApi.getAllCats().then(cats => {

      dispatch(loadCatsSuccess(cats));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadCatsSuccess(cats) {
  return {type: types.LOAD_CATS_SUCCESS, cats};
}
