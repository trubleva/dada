import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import styles from "./AltBottomNavBar.module.scss";
import firebase from "../../firebase";
import { ReactComponent as EllipsesIcon } from "../../assets/img/AltBottomNavBar/EllipsesIcon.svg";
import { ReactComponent as FavouritesIcon } from "../../assets/img/AltBottomNavBar/FavouritesIcon.svg";
import { ReactComponent as HomeIcon } from "../../assets/img/AltBottomNavBar/HomeIcon.svg";
import { ReactComponent as ProfileIcon } from "../../assets/img/AltBottomNavBar/ProfileIcon.svg";

const AltBottomNavBar = () => {

    // user state for favorites link
    const [user, setUser] = useState(null);

    // check user onmount and if user changes
    useEffect(() => {
        checkForUser();
    }, [user])

    const checkForUser = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }

    const favouritesLinkJSX = user!== null ?
            <Link to="../favorites">
                <div className={styles.iconContainer}>
                    <FavouritesIcon className={styles.navBarIcons} />
                    <p className={styles.iconSubHeader}>Favourites</p>
                </div>
            </Link>
            :
            <Link to="../sign-up">
                <div className={styles.iconContainer}>
                    <FavouritesIcon className={styles.navBarIcons} />
                    <p className={styles.iconSubHeader}>Favourites</p>
                </div>
            </Link>
  


    return (
        <div className={styles.navBarContainer}>
            <Link to="../../categories">
                <div className={styles.iconContainer}>
                    <HomeIcon className={styles.navBarIcons} />
                    <p className={styles.iconSubHeader}>Home</p>
                </div>
            </Link>
            {favouritesLinkJSX}
            <Link to="../sos">
                <div className={styles.iconContainer}>
                    <ProfileIcon className={styles.navBarIcons} />
                    <p className={styles.iconSubHeader}>Profile</p>
                </div>
            </Link>

            <Link to="../book-smarts">
                <div className={styles.iconContainer}>
                    <EllipsesIcon className={styles.navBarIcons} />
                    <p className={styles.iconSubHeader}>More</p>
                </div>
            </Link>
        </div>
    )
}

export default AltBottomNavBar;