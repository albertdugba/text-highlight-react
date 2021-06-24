import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArticle } from '../../actions/fetchActions';

class ArticleContent extends Component {
  constructor() {
    super();
    this.state = {
      loaderStyle: {
        display: 'block',
        position: 'absolute',
        left: '42%',
      },
    };
  }

  componentDidMount() {
    this.props.fetchArticle(this.props.title);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loaded) {
      this.setState({
        loaderStyle: {
          display: 'none',
          position: 'absolute',
        },
      });
    }
  }

  render() {
    return (
      <div className='article'>
        <h1>{this.props.article.title}</h1>
        {ReactHtmlParser(this.props.article.extract)}
      </div>
    );
  }
}

ArticleContent.propTypes = {
  fetchArticle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  article: PropTypes.object,
  loaded: PropTypes.bool,
};

const mapStateToProps = state => ({
  article: state.wikiReducer.article,
  loaded: state.wikiReducer.loaded,
});

export default connect(mapStateToProps, { fetchArticle })(ArticleContent);

// WEBPACK FOOTER //
// ./src/app/components/ArticleContent/ArticleContentComponent.js

export const Article = () => {};
