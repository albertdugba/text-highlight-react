import { ACTION_TYPE } from '../actions/actionType';

const initialState = {
  article: {},
  loaded: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.FETCH_ARTICLE:
      return {
        ...state,
        article: action.payload,
        loaded: true,
      };
    default:
      return state;
  }
};

// WEBPACK FOOTER //
// ./src/app/reducers/wikiReducer.js
