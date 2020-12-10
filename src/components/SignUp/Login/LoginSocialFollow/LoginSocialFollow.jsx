import React from 'react'
import styles from "./LoginSocialFollow.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase, { provider } from "../../../../firebase"
import {
    faFacebook,
    faGoogle
  } 
  from "@fortawesome/free-brands-svg-icons";
import { navigate } from '@reach/router';


const LoginSocialFollow = () => {

  const goToSignInWithGoogle = async() => {
    firebase.auth().signInWithRedirect(provider)
    .then(() => {
    navigate("/categories")
  })
  }

    return (
      <div className={styles.socialContainer}>
        <span
        className={styles.facebookSocial}>
            <FontAwesomeIcon  icon={faFacebook} size="3x" />
        </span>
        <span onClick={goToSignInWithGoogle} className={styles.twitterSocial}>
            <FontAwesomeIcon icon={faGoogle} size="3x" />
        </span>
      </div>
    );
  }

  export default LoginSocialFollow