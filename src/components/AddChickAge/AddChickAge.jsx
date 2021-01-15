import React, { useState, useEffect} from "react";
import styles from "./AddChickAge.module.scss";
import GirlChick from "../../assets/img/AddChick/GirlChick.svg";
import BoyChick from "../../assets/img/AddChick/BoyChick.svg";
import { navigate } from "@reach/router";
import BottomNavBar from '../BottomNavBar/BottomNavBar';
import { firestore } from "../../firebase";

const AddChickAge = (props) => {
  const [currentName, setCurrentName] = useState("");
  const [chickAge, setChickAge ] = useState(0);
  const [gender, setGender] = useState();
  
  const {chickName, toggleGender, user} = props;

  useEffect(() => {
    setCurrentName(chickName);
  }, [chickName])

  useEffect(() => {
    if(gender !==null || undefined){
      setGender(toggleGender);
    }
  },[gender, toggleGender ])



  const increaseAge = () => {
    setChickAge(chickAge => chickAge + 1);
  }

  const decreaseAge = () => {
    if(chickAge>0){
      setChickAge(chickAge => chickAge - 1);
    } 
  }

  const handleNextPageSplash = () => {
    if(user !== null){
      firestore.collection("users").doc(user.uid).collection("chicks").doc(currentName).set({
        name: chickName,
        age: chickAge,
        gender: gender
      })
      .then(() => console.log('chick registered'))
      .catch(error => console.log(error))
    }

    navigate("/categories");
  }


  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>

        <img src={gender ? BoyChick : GirlChick} alt="Penguin-placeholder-img"/> 

      </header>

      <h2>How old is {currentName}?</h2>

      <div className={styles.ageClicker}>
        <button className={styles.minusButton} onClick={decreaseAge}>-</button>
        <span className={styles.ageNumber}>{chickAge}</span>
        <button className={styles.plusButton} onClick={increaseAge}>+</button>
      </div>

      <button onClick={handleNextPageSplash}type="submit" className={styles.secondaryBtn}>Next</button>

      
      <BottomNavBar />
    </div>
  );
};

export default AddChickAge;

