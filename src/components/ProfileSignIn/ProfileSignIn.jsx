import React from "react";
import styles from "./ProfileSignIn.module.scss";
import PenguinIcon from "../../assets/img/ProfileSignIn/Penguin.svg";
import BottomNavBar from "../BottomNavBar";
import { Link } from "@reach/router";

const ProfileSignIn = () => {
  return (
    <>
      <header className={styles.smHeader}>
        <h1>Profile</h1>
      </header>
      <div className={styles.pageContainer}>
        <div className={styles.imgContainer}>
          <img src={PenguinIcon} alt="penguin-with-balloon" />
        </div>
        <p className={styles.pageCTA}>Let's sign you up!</p>
        <div className={styles.btnContainer}>
          <Link to="/sign-up">
          <button className={styles.primaryBtn}>Sign Up</button>
          </Link>
          <Link to="/login-page">
          <button className={styles.secondaryBtn}>Login</button>
          </Link>
        </div>
        <BottomNavBar />
      </div>
    </>
  );
};

export default ProfileSignIn;
