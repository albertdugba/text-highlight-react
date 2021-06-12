import axios from 'axios';
import { ACTION_TYPE } from './type';

export const fetchArticle = dispatch => {
  const url = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&origin=*&redirects=true&indexpageids=&titles=Stack_Overflow`;
  axios
    .get(url)
    .then(response => {
      const { title, extracts } =
        response.data.query.pages[response.data.query.pageids[0]];
      dispatch({
        type: ACTION_TYPE.FETCH_ARTICLE,
        loaded: true,
        payload: { title, extracts },
      });

      console.log(title);
    })
    .catch(error => console.log(error, 'Something went wrong'));
};
