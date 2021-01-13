import React from "react";
import styles from "./BookSmarts.module.scss";
import BookSmartCard from "./BookSmartCard";
import BottomNavBar from "../BottomNavBar";

const BookSmarts = (props) => {
  return (
    <>
      <header className={styles.smHeader}>
        <h1>Book Smarts</h1>
      </header>
      <section className={styles.pageContainer}>
        {props.docs.map((doc) => {
          return <BookSmartCard doc={doc} key={`book${doc.BookId}`}/>;
        })}
      </section>
      <BottomNavBar />
    </>
  );
};

export default BookSmarts;
