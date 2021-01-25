import React from 'react'
import { useEffect, useState } from 'react';
import Video from '../Video'
import styles from './VideoList.module.scss';

const VideoList = ({filterChosen, user, userData, tempChickAge, videos}) => {

  const [filteredVideos, setFilteredVideos] = useState([]);

  const ageFilter = (video, ageArray) => {
    // if any chick age matchs will return true
    for(let i=0; i<ageArray.length; i++){
      if(video.ageRange[0] <= ageArray[i] && video.ageRange[1] >= ageArray[i]){
        return true;
      }
    }
    return false;
  }
  
  useEffect(() => {

    // MB - added filter to remove any copies made when favouriting (where uID exists)
    let filteringVideos = videos.filter(v => v.uID == null);
   
    // first check if there are no filter categories selected... because we don't want to filter when there aren't
    if (filterChosen) {
      // take the videos and filter them if they match the fitlers we have     
      filteringVideos = filteringVideos.filter(v => v.keywords.indexOf(filterChosen) > -1 );
    }
    if(userData !== null && userData !== undefined){
      if(userData.chicks.length){
        const ageArray = userData.chicks.map(chick => chick.age);
        filteringVideos = filteringVideos.filter(video => ageFilter(video, ageArray));
      }
    } else if (window.sessionStorage.getItem("tempChickAge") !== null && window.sessionStorage.getItem("tempChickAge") !== undefined){
      const ageArray = [window.sessionStorage.getItem("tempChickAge")];
      filteringVideos = filteringVideos.filter(video => ageFilter(video, ageArray));
    }

    // map filtered videos and render video component, passing doc, key and user
    const videoElements = filteringVideos.map(doc => <Video key={doc.vidID} doc={doc} user={user} />);

    // Update the videos in state so the page re-renders
    setFilteredVideos(videoElements);

  }, [filterChosen, videos, user, tempChickAge, userData]);



  // return
  return (
      <div className={styles.vidListContainer}>
        {filteredVideos}
      </div>
  )



}

export default VideoList