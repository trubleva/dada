import React, { useCallback, useRef, useEffect } from 'react'
import styles from "./Register.module.scss"
import { navigate } from '@reach/router'
import SocialFollow from './SocialFollow';
import firebase, { firestore } from "../../../firebase"

export const Register = () => {

  const passwordRef = useRef();
  const emailRef = useRef();
  const usernameRef = useRef();

  const handleSignUp = useCallback(async event => {
    event.preventDefault();

    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
          .then(res => {
            firestore.collection("users").doc(res.user.uid).set({
              name: usernameRef.current.value
            })
          });
    }
    catch (error) {
      alert(error)
    }
  }, [emailRef, passwordRef])

  const handleLoginPage = (e) => {
    e.preventDefault();
    navigate("/login-page")
  }
  
  const getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        //console.log(user)
        navigate("/welcome");
      } else {
        return
      }
    });
  };

  useEffect(() => {
    getUser();
  }, [])
  
  return (
    <form className={styles.formContainer} onSubmit={handleSignUp}>
      <h2>Sign Up</h2>
      <div className={styles.inputContainer}>
        <label for="username"></label>
        <input
          type="text"
          id="username"
          placeholder="Name"
          name="username"
          ref={usernameRef}
        />
        <label for="user-email"></label>
        <input
          type="email"
          id="user-email"
          placeholder="Email"
          name="email"
          ref={emailRef}
        />
        <label for="user-password"></label>
        <input
          type="password"
          id="user-password"
          placeholder="Password"
          name="password"
          ref={passwordRef}
        />
      </div>
      <div className={styles.termsContainer}>
        <input type="checkbox" id="terms-checkbox"></input>

        <p className={styles.terms}>
          I have read and agree to the <span>Terms and Conditions</span>
        </p>
      </div>
      <button type="submit" className={styles.signUpBtn}>
        Sign Up
      </button>
      <p className={styles.logIn}>
        Already have an account?{" "}
        <span>
          <a href="https://github.com/nology-tech/dada" onClick={handleLoginPage}>Login</a>
        </span>
      </p>
      <p className={styles.orSignIn}>or sign in with</p>
      <SocialFollow />
    </form>
  );
}

export default Register;