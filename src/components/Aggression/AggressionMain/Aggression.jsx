import React, { useState } from "react";
import styles from "./Aggression.module.scss";
import AggressionForNow from "../AggressionForNow";
import AggressionForNextTime from "../AggressionForNextTime";
import BottomNavBar from "../../BottomNavBar";

const Aggression = () => {
  const [toggleList, setToggleList] = useState(true);

  const showClickedList = toggleList ? (
    <AggressionForNow setToggleList={setToggleList} />
  ) : (
    <AggressionForNextTime />
  );
 
  const showButtons = toggleList ? (
    <>
      <button
        className={styles.secondaryBtn} 
        onClick={() => setToggleList(true)}
      >
        For Now
      </button>
      <button
        className={styles.primaryBtn}
        onClick={() => setToggleList(false)}
      >
        For Next Time
      </button>
    </>
  ) : (
    <>
      <button className={styles.primaryBtn} onClick={() => setToggleList(true)}>
        For Now
      </button>
      <button
        className={styles.secondaryBtn}
        onClick={() => setToggleList(false)}
      >
        For Next Time
      </button>
    </>
  );

  return (
    <>
      <header className={styles.smHeader}>
        <h1>Aggression</h1>
      </header>
      <div className={styles.pageContainer}>
        {/* Buttons to select whether you wish to info for now or later */}

        <div className={styles.btnContainer}>{showButtons}</div>

        <div>{showClickedList}</div>
      </div>
      <BottomNavBar />
    </>
  );
};
//what we want to happen 
//depending on state, the button style changes 
//how to link state to styles 
//make seperate stylings and have state change them
// therefore, state must change classnames of the buttons
//how to format: 
// enclose each button in a js {}

export default Aggression;

