import { ACTION_TYPE } from '../actions/actionType';

export const fetchArticle = () => dispatch => {
  const url = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&origin=*&redirects=true&indexpageids=&titles=Stack_Overflow`;
  fetch(url)
    .then(data => data.json())
    .then(body => {
      console.log(body.data);
      const { extract } = body.query.pages[body.query.pageids[0]];
      console.log(extract);
      dispatch({
        type: ACTION_TYPE.FETCH_ARTICLE,
        loaded: true,
        payload: { extract },
      });
    })
    .catch(err => console.log(err));
};
