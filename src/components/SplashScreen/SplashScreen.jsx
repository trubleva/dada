import React from "react";
import styles from "./SplashScreen.module.scss";
import splash from "../../assets/img/DadaLogoNavy.svg";
import DeviceMockup from "../../assets/img/DeviceMockup.svg";
import AllDevices from "../../assets/img/Landing/AllDevices.svg";
import { Link, navigate } from "@reach/router";
import IdeaPenguin from "../../assets/img/Landing/IdeaPenguin.svg";
import AngryPenguin from "../../assets/img/Landing/AngryPenguin.svg";
import ReadingPenguin from "../../assets/img/Landing/ReadingPenguin.svg";
import LiftingPenguin from "../../assets/img/Landing/LiftingPenguin.svg";

const LandingPage = (props) => {

  const { user } = props;

  const handleNoUser = () => {
    user !==null ? navigate("/categories") : navigate("/add-chick")
  }

  return (
    <div className={styles.splashContainer}>
      <div className={styles.splash}>
        <img src={splash} alt="splash" />
        <Link to="login-page">
          <button className={styles.primaryBtn}>Login</button>
        </Link>
      </div>

      <div className={styles.pageCont}>
        <div className={styles.sloganCont}>
          <h1 className={styles.slogan}>A parenting coach in your pocket</h1>
        </div>
        <div className={styles.gridForDesktop}>
          <div className={styles.rightGridForDesktop}>
            <img
              src={DeviceMockup}
              className={styles.phoneForMobile}
              alt="device"
            ></img>
            <img
              src={AllDevices}
              className={styles.phoneForTablet}
              alt="device showing app"
            />
          </div>
          <div className={styles.leftGridForDesktop}>
            <div className={styles.textUnderPhoneCont}>
              <h3 className={styles.textUnderPhone}>
                Most parenting resources are built with moms in mind.
              </h3>

              <h3 className={styles.forDad}>We've created one for you, Dad!</h3>
              <p className={styles.textFathers}>
                We want to empower fathers to parent with confidence and enjoy
                more quality time with their kids.
              </p>
              
              <button className={styles.secondaryBtn} onClick={handleNoUser}>
                <Link to="/categories">
                  Get Dadvice
                </Link>
              </button>
            </div>
          </div>
        </div>
        <h2 className={styles.listTitle}>Here you will find:</h2>
      </div>
      <div className={styles.svgTextList}>
        <ul>
          <li className={styles.svgTextLi}>
            <p>
              <span className={styles.bold}>Low-effort activity ideas</span> to
              suit your mood and budget
            </p>
            <img src={IdeaPenguin} alt="idea penguin" />
          </li>
          <li className={styles.svgTextLi}>
            <img src={AngryPenguin} alt="angry penguin" />
            <p>
              <span className={styles.bold}>Fast and clear answers</span> to
              most common parenting challenges
            </p>
          </li>
          <li className={styles.svgTextLi}>
            <p>
              <span className={styles.bold}>Cliff-notes</span> from top-rated
              parenting books{" "}
              <span className={styles.italics}>
                (because who has the time to read the whole thing?)
              </span>
            </p>
            <img src={ReadingPenguin} alt="reading penguin" />
          </li>

          <li className={styles.svgTextLi}>
            <img src={LiftingPenguin} alt="weight-lifting penguin" />
            <p>
              <span className={styles.bold}>Longer reads</span> for the
              SuperDads out there
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.pageCont}>
        <button className={styles.secondaryBtn}>
          <Link to="/sign-up">
            Sign Up
          </Link>
        </button>
      </div>
      <div className={styles.bottomTextCont}>
        <div className={styles.bottomCont}>
          <h2 className={styles.bottomText}>Contact Us</h2>
          <h2 className={styles.bottomText}>Privacy</h2>
          <h2 className={styles.bottomText}>Terms</h2>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
