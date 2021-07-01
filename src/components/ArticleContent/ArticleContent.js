import { useState, useEffect } from 'react';
import { fetchArticle } from '../../context/actions';
import ReactHtmlParser from 'react-html-parser';
import { useArticleDispatch, useArtitcleState } from '../../context/context';

export const ArticleContent = () => {
  const dispatch = useArticleDispatch();
  const [loaderStyle, setLoaderStyle] = useState({
    position: 'absolute',
    display: 'block',
    left: '42%',
  });

  const { loaded, article } = useArtitcleState();
  console.log(article);

  useEffect(() => {
    fetchArticle(dispatch);
    if (loaded) {
      setLoaderStyle({ position: 'absolute', display: 'none' });
    }
  }, [dispatch, loaded]);

  return (
    <div className='article'>
      <div style={loaderStyle} />
      {ReactHtmlParser(article.extract)}
    </div>
  );
};
