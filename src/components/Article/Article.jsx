import React, { useState, useEffect } from "react";
import styles from "./Article.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as faSolidBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faOpenBookmark } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { firestore } from "../../firebase";
import { navigate, Link } from '@reach/router';

const Article = (props) => {
 
  const {title, body, readTime, image, artID, keywords, authorName, authorImage, publishDate } = props.doc;
  const user = props.user;

  const collectionName = "activityIdeas";

  const [isFavourited, setIsFavourited] = useState(false);

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
    
    <div className={styles.artContainer}>
    
      <div className={styles.artGrid}>  
        <img className={styles.artImage} src= {image} alt=""/>
        <Link to={`../../categories/activity-ideas/article-reader/${artID}`} doc={props.doc}>
        <h3 className={styles.artTitle}>{title}</h3>
        </Link>
        <p className={styles.artReadTime}>Read  Time: {readTime}</p>
        
      </div>
      <span onClick={toggleFav}>{displayBookmarkJSX()}</span>
      <Link to={`../../categories/activity-ideas/article-reader/${artID}`} doc={props.doc}>
      <span><FontAwesomeIcon icon={faChevronRight} className={styles.rightChevron}/></span>
      </Link>

    </div>
    
  );
};

export default Article;


