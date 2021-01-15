import React from 'react'
import { useEffect, useState } from 'react';
import Video from '../Video'
import styles from './VideoList.module.scss';

const VideoList = ({filterChosen, user, userData, videos}) => {

  const [filteredVideos, setFilteredVideos] = useState([]);
  
  useEffect(() => {

    // MB - added filter to remove any copies made when favouriting (where uID exists)
    let filteringVideos = videos.filter(v => v.uID == null);
   
    // first check if there are no filter categories selected... because we don't want to filter when there aren't
    if (filterChosen) {
      // take the videos and filter them if they match the fitlers we have     
      filteringVideos = filteringVideos.filter(v => v.keywords.indexOf(filterChosen) > -1 );
    }

    if(user !== null){
      const ages = userData.chicks.map(chick => chick.age).sort((a,b) => {return a-b});

      filteringVideos = filteringVideos.filter(videos => {
        for(let i=0; i<ages.length; i++){
          if(videos.ageRange[0] <= ages[i] && videos.ageRange[1] >= ages[i]){
            return videos;
          }
        }
      });
    }

    // map filtered videos and render video component, passing doc, key and user
    const videoElements = filteringVideos.map(doc => <Video key={doc.vidID} doc={doc} user={user} />);

    // Update the videos in state so the page re-renders
    setFilteredVideos(videoElements);

  }, [filterChosen, videos, user]);



  // return
  return (
      <div className={styles.vidListContainer}>
        {filteredVideos}
      </div>
  )



}

export default VideoList
