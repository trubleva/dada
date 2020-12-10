import React, { useState, useEffect } from "react";
import ReactPlayer from 'react-player';
import styles from './Video.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as faSolidBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faOpenBookmark } from '@fortawesome/free-regular-svg-icons';
import { firestore } from "../../firebase";
import { navigate } from '@reach/router';

const Video = (props) => {



  const { channel, icon, keywords, source, title, url, vidID } = props.doc;
  const user = props.user;

  const collectionName = "activityIdeasVideos";

  const [isFavourited, setIsFavourited] = useState(false);
 
  const checkFavourites = async () => {
    if (user) {
      const docRef = await firestore.collection(collectionName).doc(`${user.uid}${vidID}`);
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
      const unFavouritedDocRef = await firestore.collection(collectionName).doc(`${user.uid}${vidID}`);
      unFavouritedDocRef.get().then((uFDoc) => {
        if (uFDoc.exists) {
          // delete doc from collection
          firestore.collection(collectionName).doc(`${user.uid}${vidID}`).delete().then(() => {
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
        const favouritedDocRef = await firestore.collection(collectionName).doc(`${vidID}`);
        favouritedDocRef.get().then((fDoc) => {
          if (fDoc.exists) {
            firestore.collection(collectionName).doc(`${user.uid}${vidID}`).set({
              channel,
              icon,
              keywords,
              source,
              title,
              url,
              vidID,
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
      return <FontAwesomeIcon icon={faSolidBookmark} className={styles.vidBookmark} />
    } else {
      return <FontAwesomeIcon icon={faOpenBookmark} className={styles.vidBookmark} />
    }
  }


  return (

    <div className={styles.vidContainer}>
      <div className={styles.vidTopBar}>
        <img src={icon} alt="" className={styles.vidChanIcon} />

        <p className={styles.vidChanText}>
          {channel}
        </p>
      </div>

      <div className={styles.playerWrapper}>
        <ReactPlayer
          className={styles.reactPlayer}
          url={url}
          controls='true'
          width='100%'
          height='100%'
          config={{
            // youtube 'showinfo' property has been deprecated so unable to hide title/channel/icon from video itself
          }}
        />
      </div>

      <div className={styles.vidBottomBar}>
        <p className={styles.vidTitle}>
          {title}
        </p>

        <span onClick={toggleFav}>{displayBookmarkJSX()}</span>

      </div>
    </div>
  )
}

export default Video