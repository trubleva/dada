import React from "react";
import styles from "./SOS.module.scss";
//import SOScardsArr from "../../data/cardData";

import { SOScardsArr } from "../../data/cardData";

import { Link } from "@reach/router";
import BottomNavBar from "../BottomNavBar";

const SOS = () => {
  return (
    <>
      <header className={styles.smHeader}>
        <h1>SOS!</h1>
      </header>
      <div className={styles.pageContainer}>
        <div className={styles.gridContainer}>
          {SOScardsArr.map((card) => {
            return (

                <Link className={styles.card} to={card.path} key={card.path}>
                  <div className={styles.titleWrapper}>
                    <h2>{card.title}</h2>
                  </div>

                  <div className={styles.imageWrapper}>
                    <img src={card.image} alt="sos-category-alt-text" />
                  </div>
                </Link>
            );
          })}
        </div>
      </div>
      <BottomNavBar />
    </>
  );
};

export default SOS;
