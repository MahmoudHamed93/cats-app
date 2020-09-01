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
  GET_CATS_AFTER_REFRESH
} from '../types';

const INITIAL_STATE = {
  cats: [],
  selectedCat: {},
  selectedCatDetails: {},
  page: 0,
  limit: 10,
  loading: false,
  refreshing: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CATS_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_CATS_SUCCESS: {
      return {
        ...state,
        cats: [...state.cats, ...action.payload.res],
        page: action.payload.page,
        loading: false,
      };
    }

    case GET_CATS_FAILURE: {
      return {
        ...state,
        loading: false,
        refreshing:false
      };
    }

    case GET_CAT_DETAILS: {
      return {
        ...state,
      };
    }

    case GET_CAT_DETAILS_SUCCESS: {
      return {
        ...state,
        selectedCat: action.payload[0],
        selectedCatDetails: action.payload[0].breeds[0],
      };
    }

    case GET_CAT_DETAILS_FAILURE: {
      return {
        ...state,
      };
    }

    case GET_CATS_AFTER_SEARCH: {
      return {
        ...state,
        cats: action.payload,
      };
    }

    case GET_CATS_AFTER_REFRESH: {
      return {
        ...state,
        cats: action.payload,
        refreshing: false,
      };
    }

    case RESET_SEELECTED_CAT_OBJECT: {
      return {
        ...state,
        selectedCat: {},
        selectedCatDetails: {},
      };
    }

    case REFRESH_PAGE: {
      return {
        ...state,
        refreshing: true,
      };
    }

    default:
      return state;
  }
};
