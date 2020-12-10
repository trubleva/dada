import React, { useState} from "react";
import styles from './BottomNavBar.module.scss';
import { ReactComponent as HomeIcon } from '../../assets/img/BottomNavBar/HomeIcon.svg';
import { ReactComponent as ActivitiesIcon } from "../../assets/img/BottomNavBar/ActivitiesIcon.svg";
import { ReactComponent as BookSmartsNavIcon } from "../../assets/img/BottomNavBar/BookSmartsNavIcon.svg";
import { ReactComponent as SOSNavIcon } from "../../assets/img/BottomNavBar/SOSNavIcon.svg";
import { ReactComponent as UYGNavIcon } from "../../assets/img/BottomNavBar/UYGNavIcon.svg";
import { navigate } from "@reach/router";

const BottomNavBar = (props) => {

    // State change to switch between different SVG states on click
    const [ switchHomeIcon, setSwitchHomeIcon ] = useState(false);
    const [ switchActivityIcon, setSwitchActivityIcon ] = useState(false);
    const [ switchSOSIcon, setSwitchSOSIcon ] = useState(false);
    const [ switchBookSmartsIcon, setSwitchBookSmartsIcon ] = useState(false);
    const [ switchUYGIcon, setSwitchUYGIcon ] = useState(false);

    // Functions to fill / defill SVG's 
    const toggleHomeIcon = switchHomeIcon ? styles.toggled : "";
    const toggleActivityIcon = switchActivityIcon ? styles.toggled : "";
    const toggleSOSIcon = switchSOSIcon ? styles.toggled : "";
    const toggleBookSmartsIcon = switchBookSmartsIcon ? styles.toggled : "";
    const toggleUYGIcon = switchUYGIcon ? styles.toggled : "";

    // Navigation functions to key categories
    const navigateToCategories = () => {
        navigate("/categories")
    }
    const navigateToActivityIdeas = () => {
        navigate("/categories/activity-ideas")
    }
    const navigateToSOS = () => {
        navigate("/categories/sos")
    }
    const navigateToBookSmarts = () => {
        navigate("/categories/book-smarts")
    }
    const navigateToUYG = () => {
        navigate("/categories/up-your-game")
    }

    return(
    <div className={styles.navBarContainer}>
        <div className={styles.iconContainer}>
            <HomeIcon className={`${styles.navBarIcons} ${toggleHomeIcon}`} onClick={() => {
                setSwitchHomeIcon(!switchHomeIcon)
                navigateToCategories()
            }} 
            />
        </div>
        <div className={styles.iconContainer}>
            <ActivitiesIcon className={`${styles.navBarIcons} ${toggleActivityIcon}`} onClick={() => {
                setSwitchActivityIcon(!switchActivityIcon)
                navigateToActivityIdeas()
            }} 
            />
        </div>
        <div className={styles.iconContainer}>
            <SOSNavIcon className={`${styles.navBarIcons} ${toggleSOSIcon}`} onClick={() => {
                setSwitchSOSIcon(!switchSOSIcon)
                navigateToSOS()
            }} 
            />
        </div>
        <div className={styles.iconContainer}>
            <BookSmartsNavIcon className={`${styles.navBarIcons} ${toggleBookSmartsIcon}`} onClick={() => {
                setSwitchBookSmartsIcon(!switchBookSmartsIcon)
                navigateToBookSmarts()
            }} 
            />
        </div>
        <div className={styles.iconContainer}>
            <UYGNavIcon className={`${styles.navBarIcons} ${toggleUYGIcon}`} onClick={() => {
                setSwitchUYGIcon(!switchUYGIcon)
                navigateToUYG()
            }} 
            />
        </div>
    </div>
    ) 
}

export default BottomNavBar;