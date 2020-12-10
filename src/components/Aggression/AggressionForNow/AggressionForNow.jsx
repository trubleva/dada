import React from "react";
import styles from "./AggressionForNow.module.scss";

const AggressionForNow = (props) => {
  const { setToggleList } = props

  return (
    <>
      <div className={styles.whatNotToDo}>
        <h3>What NOT to do:</h3>
        <ul className={styles.whatNotToDoUl}>
          <li>Yell or spank</li>
          <li>Give in just because they are crying</li>
          <li>Mock or threaten</li>
          <li>Try to reason with your kid or apply logic</li>
        </ul>
      </div>
      <div className={styles.tryThis}>
        <h3>Try this:</h3>
        <ul className={styles.tryThisUl}>
          <li>Take a deep breath and calm down</li>
          <li>Remove your child from a situation, if needed</li>
          <li>Be firm but gentle</li>
          <li>Acknowledge your child's feelings, name them</li>
          <li>Stay calm and consistent</li>
          <li>Wait, then re-engage when they're starting to cool down</li>
        </ul>
      </div>
      <button className={styles.bottomBtn} onClick={() => setToggleList(false)}>
        Prepare For Next Time
      </button>
    </>
  );
};
//what we need it to do: 
//toggle the items shows to the for next time 

//how? 

//it needs to influence the state, the same way as the next time button 


export default AggressionForNow;

