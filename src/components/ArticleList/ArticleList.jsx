import React from 'react';
import { useEffect, useState } from 'react';
import Article from '../Article/Article';
import styles from './ArticleList.module.scss';

const ArticleList = ({filterChosen, user, userData, tempChickAge, articles}) => {
  // state
  const [filteredArticles, setFilteredArticles] = useState([]);
 
  useEffect(() => {
    let filteringArticles = articles.filter(a => a.uID == null);

    // first check if there are no filters... because we don't want to filter when there aren't
    if (filterChosen) {
      // take the Articles and filter them if they match the fitlers we have
      filteringArticles = filteringArticles.filter(a => a.keywords.indexOf(filterChosen) > -1);
    }

    if(userData !== null && userData !== undefined){
      if(userData.chicks.length){
          const ages = userData.chicks.map(chick => chick.age);

          filteringArticles = filteringArticles.filter(article => {
            for(let i=0; i<ages.length; i++){
              if(article.ageRange[0] <= ages[i] && article.ageRange[1] >= ages[i]){
                return article;
              }
            }
          });
      }
    } else if (tempChickAge !== null && tempChickAge !== undefined){
      filteringArticles = filteringArticles.filter(article => {
          if(article.ageRange[0] <= tempChickAge && article.ageRange[1] >= tempChickAge){
            return article;
          }
      });
    }

    // map filtered articles and render article component, passing doc, key and user
    const articleElements = filteringArticles.map(doc => <Article key={doc.artID} doc={doc} user={user} />);

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

