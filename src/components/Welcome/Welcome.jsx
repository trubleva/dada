import React from 'react';
import styles from './Welcome.module.scss';
import { Link } from '@reach/router';
import Penguin from '../../assets/img/Welcome/WelcomePenguin.svg';

const Welcome = () => {
    return (
        <>
        <div className={styles.smHeader}>

        </div>
        <div className={styles.pageContainer}>
            <div className={styles.chickCard}>
                <div className={styles.imageContainer}>
                    <img src={Penguin} alt="Penguin-placeholder-img"/>
                </div>
                <h2>Welcome, Dad!</h2>
                <p>You've got this.</p>
            </div>
            <Link to="/add-chick">
            <button className={styles.secondaryBtn}>
                Add Chicks
            </button>
            </Link>
        </div>
        </>
    )
}

export default Welcome;
