import {
  GET_CATS_START,
  GET_CATS_SUCCESS,
  GET_CATS_FAILURE,
  GET_CAT_DETAILS,
  GET_CAT_DETAILS_SUCCESS,
  GET_CAT_DETAILS_FAILURE,
  RESET_SEELECTED_CAT_OBJECT,
  GET_CATS_AFTER_SEARCH,
  REFRESH_PAGE,
  GET_CATS_AFTER_REFRESH,
} from '../types';
import {getCats, catSearch, catDetails} from '../services';

export const getCatsListAction = (page = 0, limit = 10) => dispatch => {
  dispatch({
    type: GET_CATS_START,
  });
  getCats(page, limit)
    .then(res => {
      dispatch({
        type: GET_CATS_SUCCESS,
        payload: {res, page},
      });
    })
    .catch(e => {
      dispatch({
        type: GET_CATS_FAILURE,
        payload: {
          error: e,
        },
      });
    });
};

export const getCatDetailsAction = id => dispatch => {
  dispatch({
    type: GET_CAT_DETAILS,
  });
  catDetails(id)
    .then(res => {
      dispatch({
        type: GET_CAT_DETAILS_SUCCESS,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: GET_CAT_DETAILS_FAILURE,
        payload: {
          error: e,
        },
      });
    });
};

export const handleSearchByName = (page, limit, name) => dispatch => {
  dispatch({
    type: GET_CATS_START,
  });
  catSearch(page, limit, name)
    .then(res => {
      dispatch({
        type: GET_CATS_AFTER_SEARCH,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: GET_CATS_FAILURE,
        payload: {
          error: e,
        },
      });
    });
};

export const handleRefreshSearch = (page, limit) => dispatch => {
  dispatch({
    type: GET_CATS_START,
  });
  getCats(page, limit)
    .then(res => {
      dispatch({
        type: GET_CATS_AFTER_REFRESH,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: GET_CATS_FAILURE,
        payload: {
          error: e,
        },
      });
    });
};

export const resetSelectedCat = () => dispatch => {
  dispatch({
    type: RESET_SEELECTED_CAT_OBJECT,
  });
};

export const handlePageRefreshAction = () => dispatch => {
  dispatch({
    type: REFRESH_PAGE,
  });
};
