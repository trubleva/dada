import React, { useState } from "react";
import { Link } from "@reach/router";
import styles from "./AddChick.module.scss";
import BoyChick from "../../assets/img/AddChick/BoyChick.svg";
import GirlChick from "../../assets/img/AddChick/GirlChick.svg";

const AddChick = () => {
  const [toggleGender, setToggleGender] = useState(false);
  const [chickName, setChickName] = useState("");
  const nameInput = (e) => setChickName(e.target.value);

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <p>What is your chick's name?</p>
      </header>
      <form className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <label for="name"></label>
          <input type="text" onInput={nameInput} placeholder="Chick's name..." />
        </div>
        <div className={styles.imageContainer}>
          <button
            className={styles.girlChickBtn}
            type="button"
            onClick={() => setToggleGender("female")}
          >
            <img src={GirlChick} alt="Penguin-placeholder-img" />
            <span>Girl</span>
          </button>
          <button
            className={styles.boyChickBtn}
            type="button"
            onClick={() => setToggleGender("male")}
          >
            <img src={BoyChick} alt="Penguin-placeholder-img" />
            <span>Boy</span>
          </button>
        </div>
      </form>

      <Link to={`/add-chick-age/${chickName}/${toggleGender}`}>
        <button type="submit" className={styles.secondaryBtn}>
          Next
        </button>
      </Link>
    </div>
  );
};

export default AddChick;
