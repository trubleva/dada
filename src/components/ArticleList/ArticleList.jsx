import React from 'react';
import { useEffect, useState } from 'react';
import Article from '../Article/Article';
import styles from './ArticleList.module.scss';

const ArticleList = (props) => {

  const { filterChosen, user, articles } = props;

  // state
  const [filteredArticles, setFilteredArticles] = useState([]);
 
  useEffect(() => {
    let filteredArticles = articles.filter(a => a.uID == null);

    // first check if there are no filters... because we don't want to filter when there aren't
    if (filterChosen) {
      // take the Articles and filter them if they match the fitlers we have
      filteredArticles = filteredArticles.filter(a => a.keywords.indexOf(filterChosen) > -1);
    }

    // map filtered articles and render article component, passing doc, key and user
    const articleElements = filteredArticles.map(doc => <Article key={doc.artID} doc={doc} user={user} />);

    // Update the Articles in our state so that the page re-renders....
    setFilteredArticles(articleElements);

  }, [filterChosen, articles, user]);

  // return
  return (
    <div className={styles.articleListContainer}>
      {filteredArticles}
    </div>
  )
}

export default ArticleList

