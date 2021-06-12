import { createContext, useReducer, useContext } from 'react';
import { reducer, initialState } from './reducer';

const ArticleState = createContext();
const ArticleDispatch = createContext();

export const useArtitcleState = () => {
  const context = useContext(ArticleState);
  if (context === undefined) {
    throw new Error('useArticleState must be used within an ArticleProvider');
  }

  return context;
};

export const useArticleDispatch = () => {
  const context = useContext(ArticleDispatch);
  if (context === undefined) {
    throw new Error(
      'useArticleDispatch must be used within an ArticleProvider'
    );
  }

  return context;
};

export const ArticleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ArticleState.Provider value={state}>
      <ArticleDispatch.Provider value={dispatch}>
        {children}
      </ArticleDispatch.Provider>
    </ArticleState.Provider>
  );
};
