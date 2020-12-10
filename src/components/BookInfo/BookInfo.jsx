import React, { useState, useEffect } from 'react';
import styles from './BookInfo.module.scss';
import BookInsightCard from './BookInsightCard';
import BottomNavBar from "../BottomNavBar";

const BookInfo = (props) => {
    
    const [currentBook, setCurrentBook] = useState(0);

    useEffect(() => {
        setCurrentBook(props.BookId)
    }, [props.BookId])


    return (
      <>
        <header className={styles.smHeader}>
          <h1>Book Smarts</h1>
        </header>
        <div className={styles.pageContainer}>
          <section className={styles.bookOverview}>
            <div className={styles.aboutBook}>
              <div className={styles.bookCover}>
                <img src={props.docs[currentBook].Img} alt="book-cover" />
              </div>

              <div className={styles.bookContentOverview}>
                <h2>{props.docs[currentBook].Title}</h2>
                <p className={styles.bookAuthor}>
                  {props.docs[currentBook].Author},{" "}
                  {props.docs[currentBook].publishDate}
                </p>
              </div>
            </div>
            <p className={styles.bookBlurb}>{props.docs[currentBook].Blurb}</p>
            <div className={styles.overviewFooter}>
              <p className={styles.readTime}>
                Read Time: {props.docs[currentBook].ReadTime}
              </p>
              <p>Insights: {props.docs[currentBook].KeyInsights.length} </p>
            </div>
            <div className={styles.aboutAuthor}>
              <h3>About Author</h3>
              <p>{props.docs[currentBook].AuthorBackground}</p>
            </div>
          </section>
          <section className={styles.keyInsights}>
            <h3>Key Insights</h3>
            <div className={styles.keyInsightCard}>
              {props.docs[currentBook].KeyInsights.map((doc) => {
                return <BookInsightCard doc={doc} currentBook={currentBook} />;
              })}
            </div>
          </section>
        </div>
        <BottomNavBar />
      </>
    );
}

export default BookInfo;
