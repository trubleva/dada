import React, { useRef, useEffect } from 'react'
import styles from "./Login.module.scss"
import { navigate } from '@reach/router'
import LoginSocialFollow from './LoginSocialFollow';
import firebase from "../../../firebase"

export const Login = (props) => {
  const passwordRef = useRef()
  const emailRef = useRef()

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
    }
    catch (error) {
      alert(error)
    }
  }


  const handleSignUpPage = (e) => {
    e.preventDefault();
    navigate('/sign-up')
  }


const getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigate("/categories");
      } else {
        return
      }
    });
  };

  useEffect(() => {
    getUser();
  })

  return (
    <form className={styles.formContainer} onSubmit={handleLogin}>
      <h2>Login</h2>
      <div className={styles.inputContainer}>
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
          I read and agree to <span>Terms and Conditions</span>
        </p>
      </div>
      <button type="submit" className={styles.signUpBtn}>
        Login
      </button>
      <p className={styles.logIn}>
        Need an account?{" "}
        <span>
          <a href="https://github.com/nology-tech/dada" onClick={handleSignUpPage}>Sign up</a>
        </span>
      </p>
      <p className={styles.orSignIn}>or login in with</p>
      <LoginSocialFollow />
    </form>
  );
}

export default Login;