import React, { useState, useEffect} from "react";
import styles from './BottomNavBar.module.scss';
import { ReactComponent as HomeIcon } from '../../assets/img/BottomNavBar/HomeIcon.svg';
import { ReactComponent as ActivitiesIcon } from "../../assets/img/BottomNavBar/ActivitiesIcon.svg";
import { ReactComponent as BookSmartsNavIcon } from "../../assets/img/BottomNavBar/BookSmartsNavIcon.svg";
import { ReactComponent as SOSNavIcon } from "../../assets/img/BottomNavBar/SOSNavIcon.svg";
import { ReactComponent as UYGNavIcon } from "../../assets/img/BottomNavBar/UYGNavIcon.svg";
import { navigate } from "@reach/router";

const BottomNavBar = (props) => {

    // State change to switch between different SVG states on click
    const [ switchHomeIcon, setSwitchHomeIcon ] = useState();
    const [ switchActivityIcon, setSwitchActivityIcon ] = useState();
    const [ switchSOSIcon, setSwitchSOSIcon ] = useState();
    const [ switchBookSmartsIcon, setSwitchBookSmartsIcon ] = useState();
    const [ switchUYGIcon, setSwitchUYGIcon ] = useState();

    // Functions to fill / defill SVG's 
    const toggleHomeIcon = switchHomeIcon ? styles.toggled : "";
    const toggleActivityIcon = switchActivityIcon ? styles.toggled : "";
    const toggleSOSIcon = switchSOSIcon ? styles.toggled : "";
    const toggleBookSmartsIcon = switchBookSmartsIcon ? styles.toggled : "";
    const toggleUYGIcon = switchUYGIcon ? styles.toggled : "";

    // MB Jan 20 - existing code for navbar icon state won't work as it is 
    // just toggling the state. We should defill all icons first 
    // and then fill the selected icon

    // MB Jan 20 - Defill all navbar icons
    const setAllNavBarIconsToInactive = () => {
        setSwitchHomeIcon(false);
        setSwitchActivityIcon(false);
        setSwitchSOSIcon(false);
        setSwitchBookSmartsIcon(false);
        setSwitchUYGIcon(false);
    }


    // MB Jan 20 - we also need to check url and set relevant icon to active 
    // as the re-render resets them all to false, unfilled
    // It would be possible to just set whether an icon was 'active' based 
    // on the page and rely on &:hover - but I think that may lead to the icon 
    // being unfilled if a page takes a while to load for some reason.
    const setPageIconToActive = () => {
        if (window.location.pathname === "/categories") {
            setSwitchHomeIcon(true);
        } else if (window.location.pathname.includes("/categories/activity-ideas")) {
            setSwitchActivityIcon(true);
        } else if (window.location.pathname.includes("/categories/sos")) {
            setSwitchSOSIcon(true);
        } else if (window.location.pathname.includes("/categories/book-smarts")) {
            setSwitchBookSmartsIcon(true);
        } else if (window.location.pathname.includes("/categories/up-your-game")) {
            setSwitchUYGIcon(true);
        }
    }

    useEffect(() => {
        setPageIconToActive()
      },[])


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
                setAllNavBarIconsToInactive()
                setSwitchHomeIcon(true)
                navigateToCategories()
            }} 
            />
        </div>
        <div className={styles.iconContainer}>
            <ActivitiesIcon className={`${styles.navBarIcons} ${toggleActivityIcon}`} onClick={() => {
                setAllNavBarIconsToInactive()
                setSwitchActivityIcon(true)
                navigateToActivityIdeas()
            }} 
            />
        </div>
        <div className={styles.iconContainer}>
            <SOSNavIcon className={`${styles.navBarIcons} ${toggleSOSIcon}`} onClick={() => {
                setAllNavBarIconsToInactive()
                setSwitchSOSIcon(true)
                navigateToSOS()
            }} 
            />
        </div>
        <div className={styles.iconContainer}>
            <BookSmartsNavIcon className={`${styles.navBarIcons} ${toggleBookSmartsIcon}`} onClick={() => {
                setAllNavBarIconsToInactive()
                setSwitchBookSmartsIcon(true)
                navigateToBookSmarts()
            }} 
            />
        </div>
        <div className={styles.iconContainer}>
            <UYGNavIcon className={`${styles.navBarIcons} ${toggleUYGIcon}`} onClick={() => {
                setAllNavBarIconsToInactive()
                setSwitchUYGIcon(true)
                navigateToUYG()
            }} 
            />
        </div>
    </div>
    ) 
}

export default BottomNavBar;