import React from "react";
import styles from "./AggressionForNextTime.module.scss";
import TacklingTransition from "../../../assets/img/TacklingTransition.svg";
import IWantMom from "../../../assets/img/IWantMom.svg";
const AggressionForNextTime = () => {
  return (
    <>
      <p>Read time: 3 min</p>

      <h3 className={styles.tantrumsNextTitle}>Why Do Tantrums Happen?</h3>

      <ul className={styles.whyTantrumsHappenUl}>
        <li>Toddlers aren't able to control their emotions just yet.</li>
        <li>
          They don’t have the words to express big emotions and, like babies,
          use crying to communicate negative feelings.
        </li>
        <li>
          Toddlers now know their behavior can influence others - and want to
          test their powers!
        </li>
      </ul>

      <h3>Prepare For Next Time</h3>

      <ul className={styles.prepareUl}>
        <li>
          <span className={styles.bold}>Plan ahead.</span> When your child is
          hungry, tired or stressed, they are much more likely to have a
          tantrum.
        </li>
        <li>
          <span className={styles.bold}>Tune in to your child’s feelings.</span>{" "}
          You’ll be able to help them better deal with big emotions or distract
          your kid before he or she loses it.
        </li>
        <li>
          <span className={styles.bold}>Consider tantrum triggers.</span> Kids
          have an innate need to explore and exercise their power. Do you really
          need to put your foot down or do you say ‘no’ out of habit?
        </li>
        <li>
          <span className={styles.bold}>Talk about emotions.</span> Name them
          and praise your child when they successfully identify them.{" "}
        </li>
      </ul>

      <h3 className={styles.upYourGameTitle}>Up Your Game</h3>
      <div className={styles.flexContainer}>
        <div className={styles.flexItem}>
          <img src={TacklingTransition} alt="NOT FINAL" />
          <span className={styles.bold}>Tackling Transitions</span>
          <p className={styles.smallText}>Read time: 3 min</p>
          <p className={styles.smallText}>
            
            Helping your kid switch activities smoothly
          
          </p>
        </div>
        <div className={styles.flexItem}>
          <img src={IWantMom} alt="NOT FINAL" />
          <span className={styles.bold}>"I Want Mom!"</span>
          <p className={styles.smallText}>Read time: 4 min</p>
          <p className={styles.smallText}>Don't worry, it's not personal</p>
        </div>
      </div>
    </>
  );
};

export default AggressionForNextTime;
