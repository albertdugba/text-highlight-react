import { ACTION_TYPE } from './type';

export const initialState = {
  article: {},
  loaded: false,
};

export const reducer = (initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.FETCH_ARTICLE:
      return {
        ...initialState,
        article: action.payload,
        loaded: true,
      };

    default:
      return initialState;
  }
};

export const articleReducer = (initialState, action) => {};
