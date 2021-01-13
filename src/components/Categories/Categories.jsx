import React from "react";
import styles from "./Categories.module.scss";
import { cardsArr } from "../../data/cardData";
import { Link } from "@reach/router";
import BottomNavBar from "../BottomNavBar";

const Categories = () => {

  return (
    <>
      <header className={styles.smHeader}>
        <h1>What are you looking for?</h1>
      </header>
      <main className={styles.pageContainer}>
        <div className={styles.gridContainer}>
          {cardsArr.map((card) => {
            return (
              <Link to={card.path} className={styles.card} key={card.path}>
                <div className={styles.titleSubheaderContainer}>
                  <h2>{card.title}</h2>
                  <p className={styles.cardSubHeader}>{card.info}</p>
                </div>

                <div className={styles.image}>
                  <img src={card.image} alt="penguin-illustration" />
                </div>
              </Link>
            );
          })}
        </div>
      </main>
      <BottomNavBar />
    </>
  );
};

export default Categories;
