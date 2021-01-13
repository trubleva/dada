import React from "react";
import Styles from "./UpYourGame.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BottomNavBar from "../BottomNavBar";

const UpYourGame = ({docs, subDocs}) => {

  return (
    <>
    <header className={Styles.smHeader}>
      <h1>Up Your Game</h1>
    </header>

    <main className={Styles.pageContainer}> 

      <div className={Styles.articleContainer}>
      {docs.map((doc) => {
        return(
            <section className={Styles.upYourGameArticles}>
              <img className={Styles.articleBackgroundImage} src={doc.backgroundImage} alt=""/>
              <img className={Styles.articleProfileImage} src={doc.profileImage} alt= "" />
              <button className={Styles.articleTag}>{doc.filterTag}</button>
              <h2>{doc.title}</h2>
              <h3>{doc.subtitle}</h3>
              <p>{doc.author} | {doc.readTime}</p>
              <p><FontAwesomeIcon icon={"comment-alt"}/> </p>
            </section>
              )
        })}
      </div>


        <h2>Most Discussed</h2>
          {subDocs.map((subDoc) => {
            return(
          <section className={Styles.mostDiscussedCards}>  
            <h3>{subDoc.title}</h3>
            <span>{subDoc.author} | </span>
            <span>{subDoc.readTime}</span>
          </section>
          )})}
        </main> 
        <BottomNavBar />
    </>
  );
}

export default UpYourGame;
