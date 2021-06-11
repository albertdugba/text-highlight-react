import { ACTION_TYPE } from '../actions/actionType';

export const fetchArticle = title => dispatch => {
  const url = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&origin=*&redirects=true&indexpageids=&titles=Stack_Overflow`;
  fetch(url)
    .then(data => data.json())
    .then(body => {
      const { title, extract } = body.query.pages[body.query.pageids[0]];
      dispatch({
        type: ACTION_TYPE.FETCH_ARTICLE,
        payload: { title, extract },
      });
    })
    .catch(err => console.log(err));
};
