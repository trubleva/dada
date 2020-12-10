import React, { useState, useEffect } from 'react';
import styles from "./ArticleReader.module.scss";
import BottomNavBar from "../BottomNavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as faSolidBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faOpenBookmark } from '@fortawesome/free-regular-svg-icons';
import { firestore } from "../../firebase";
import { navigate } from '@reach/router';


const ArticleReader = (props) => {

  const [longerContent, setLongerContent] = useState([]);
  const [docs, setDocs] = useState([]);
  const [article, setArticle] = useState({});
  const [isFavourited, setIsFavourited] = useState(false);
  
  const artID = props.artID;
  const user = props.user;
  const collectionName = "activityIdeas";

  const checkFavourites = async () => {
    if (user) {
      const docRef = await firestore.collection(collectionName).doc(`${user.uid}${artID}`);
      docRef.get().then((doc) => {
        if (doc.exists) {
          setIsFavourited(true);
        }
      });
    }
  }

  const getArticle = async () => {
    await firestore.collection(collectionName).get().then((response) => {
      const documents = response.docs.map(d => d.data())
      setDocs(documents)

    })
  }

  useEffect(() => {
    getArticle();
  }, [])



  useEffect(() => {
    let filteredArticles = docs.filter(a => a.uID == null);
    filteredArticles = filteredArticles.filter(a => a.artID === props.artID);   
    setArticle(filteredArticles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [docs])

  useEffect(() => {
    if(article[0]!==undefined){
      setLongerContent(article[0]);
    }
  },[article,longerContent])

  useEffect(() => {
    checkFavourites();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFavourited])

  const toggleFav = async (e) => {
    e.stopPropagation();

    if (isFavourited) {
      // remove from users favourites by deleting the document
      const unFavouritedDocRef = await firestore.collection(collectionName).doc(`${user.uid}${artID}`);
      unFavouritedDocRef.get().then((uFDoc) => {
        if (uFDoc.exists) {
          // delete doc from collection
          firestore.collection(collectionName).doc(`${user.uid}${artID}`).delete().then(() => {
            setIsFavourited(!isFavourited);
          });
        }
      });

    } else {
      // check if user is logged in - if not, take them to sign-up
      if (!user) {
        navigate("/sign-up");
      } else {

        const {authorImage,authorName,body,image,keywords,publishDate,readTime,title} = longerContent;

        //add to users favourites by creating copy of the document
        const favouritedDocRef = await firestore.collection(collectionName).doc(`${artID}`);
        favouritedDocRef.get().then((fDoc) => {
          if (fDoc.exists) {
            firestore.collection(collectionName).doc(`${user.uid}${artID}`).set({
              artID,
              authorImage,
              authorName,
              body,
              image,
              keywords,
              publishDate,
              readTime,
              title,
              uID: user.uid
            })
            setIsFavourited(!isFavourited);
          }

        });
      }

    }
  }



  const displayBookmarkJSX = () => {
    if (isFavourited) {
      return <FontAwesomeIcon icon={faSolidBookmark} className={styles.artBookmark} />
    } else {
      return <FontAwesomeIcon icon={faOpenBookmark} className={styles.artBookmark} />
    }
  }



  return (
    <>
      <header className={styles.smHeader}>
        <h1>Article Reader</h1>
      </header>



      <main className={styles.pageContainer}>
        <section className={styles.readerContent}>
          <div className={styles.headingContainer}>
            <h2>{longerContent.title}</h2>
            <span onClick={toggleFav}>{displayBookmarkJSX()}</span>
          </div>
          <section className={styles.authorSection}>
            <img
              className={styles.readerAuthorImage}
              src={longerContent.authorImage}
              alt=""
            />
            <div className={styles.byLine}>
              <p className={styles.authorName}>
                {longerContent.authorName} | {longerContent.publishDate}
              </p>
              <p className={styles.date}>
                {longerContent.date}
              </p>
            </div>
          </section>

        <div className={styles.mainBody}>
         <div dangerouslySetInnerHTML={{__html: longerContent.body}}/>
         </div>

        </section>

        {/* <section className={styles.relatedSection}>
            <div className={styles.relatedHeading}>
              <h2>
                Related Articles
              </h2>
              <hr/>
            </div>
            <div className={styles.relatedGrid}>
              <div>
                <img className={styles.relatedImage} src="../../img/CategoryPage/ActivityIdeas/parent5.jpg" alt="https://via.placeholder.com/160x120.png"/>
                <h3 className={styles.relatedArticleTitle}>
                Article Title
                </h3>
                <p>
                  Short summary of article
                </p>
                <p>
                  Read time: 3 min
                </p>
              </div>
              
              <div>
                <img className={styles.relatedImage} src="../../img/CategoryPage/ActivityIdeas/parent1.jpg" alt=""/>
                <h3 className={styles.relatedArticleTitle}>
                Article Title
                </h3>
                <p>
                  Short summary of article
                </p>
                <p>
                  Read time: 3 min
                </p>
              </div>
            </div>
          </section> */}

      </main>

      <BottomNavBar />
    </>
  )



}

export default ArticleReader;
