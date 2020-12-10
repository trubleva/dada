import React, { useState, useEffect } from "react";
import styles from "./BookInsights.module.scss";
import BottomNavBar from "../../BottomNavBar";
import { Link } from "@reach/router";
const BookInsights = (props) => {
const [currentBook, setCurrentBook] = useState(0);


    const [currentInsight, setCurrentInsight] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCurrentBook(props.BookId)
    }, [props.BookId])

    useEffect(() => {
        setCurrentInsight(props.insightID);
    }, [props.insightID]);

    const nextInsight = () =>{ 
        if ( count < props.docs[currentBook].KeyInsights.length -1 ){
            return setCount(count + 1);
        } else {
            return (count)
        }
    }
  
    return (
      <>
        <header className={styles.smHeader}>
          <h1>
            Book Smarts
          </h1>
        </header>
        <div className={styles.pageContainer}>
          <div className={styles.pageContent}>
            <h2>{props.docs[currentBook].KeyInsights[currentInsight].insightTitle}</h2>
            <p className={styles.paragraph}>
              {props.docs[currentBook].KeyInsights[currentInsight].insightRead}
            </p>
          </div>
          <div className={styles.btnContainer}>
            <Link to={`../../book-insight/${count}`}>
              <button className={styles.secondaryBtn} onClick={nextInsight}>
                Next Highlight
              </button>
            </Link>
          </div>
        </div>
        <BottomNavBar />
      </>
    );
}

export default BookInsights;
