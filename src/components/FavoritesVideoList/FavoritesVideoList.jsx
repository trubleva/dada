import React from 'react'
import { useEffect, useState } from 'react';
import Video from '../Video'
import styles from './FavoritesVideoList.module.scss';
import { firestore} from "../../firebase";


const FavoritesVideoList = (props) => {

  const [docs, setDocs] = useState([]);

  const { filterChosen, user} = props;

  const [filteredVideos, setFilteredVideos] = useState([]);

  const getVideos = async () => {
    await firestore.collection("activityIdeasVideos").get().then((response) => {
       const documents = response.docs.map(d => d.data());
       setDocs(documents);
    })
  }

  useEffect(() => {
    getVideos();
  },[filterChosen])

  
  useEffect(() => {

    // MB - added filter to remove any copies made when favouriting (where uID exists)
    let filteredVideos = docs.filter(v => v.uID === user.uid);
   
    // first check if there are no filter categories selected... because we don't want to filter when there aren't
    if (filterChosen) {
      // take the videos and filter them if they match the fitlers we have     
      filteredVideos = filteredVideos.filter(v => v.keywords.indexOf(filterChosen) > -1 );
    }

    // map filtered videos and render video component, passing doc, key and user
    const videoElements = filteredVideos.map(doc => <Video key={doc.vidID} doc={doc} user={user} />);

    // Update the videos in state so the page re-renders
    setFilteredVideos(videoElements);

  }, [filterChosen,docs,user]);



  // return
  return (
      <div className={styles.vidListContainer}>
        {filteredVideos}
      </div>
  )



}

export default FavoritesVideoList
