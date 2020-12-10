import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import Categories from "../../components/Categories";
import SignUp from "../../components/SignUp/register";
import ActivityIdeas from "../../components/ActivityIdeas";
import BookSmarts from "../../components/BookSmarts/BookSmarts";
import BookInfo from "../../components/BookInfo";
import AddChick from "../../components/AddChick";
import SOS from "../../components/SOS";
import SplashScreen from "../../components/SplashScreen";
import Tantrums from "../../components/Tantrums";
import Aggression from "../../components/Aggression/AggressionMain";
import Screaming from "../../components/Screaming/ScreamingMain";
import Whining from "../../components/Whining/WhiningMain";
import SleepIssues from "../../components/Sleep/SleepMain";
import Rejection from "../../components/Rejection/RejectionMain";
import ArticleReader from "../../components/ArticleReader";
import Welcome from "../../components/Welcome";
import Login from "../../components/SignUp/Login"
import AddChickAge from "../../components/AddChickAge";
import UpYourGame from "../../components/UpYourGame";
import ProfileSignIn from "../../components/ProfileSignIn";
import BookInsights from "../../components/BookInfo/BookInsights";
import Favorites from "../../components/Favorites";
import { firestore } from "../../firebase";
import RegisteredUserProfile from "../../components/RegisteredUserProfile";

const Routes = (props) => {

    const user = props.user;

    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const getBookSmarts = () => {
            firestore
                .collection("booksmarts")
                .get()
                .then((response) => {
                    const documents = response.docs.map((d) => d.data());
                    setDocs(documents);
                });
        };

        getBookSmarts();
    }, []);

    return (
        <Router>
            <ActivityIdeas path="categories/activity-ideas" user={user} />
            <AddChick path="add-chick" user={user} />
            <AddChickAge path="add-chick-age/:chickName/:toggleGender" user={user} />
            <Aggression path="categories/sos/aggression" user={user} />
            <ArticleReader path="categories/activity-ideas/article-reader/:artID" user={user} />
            <BookInfo path="categories/book-smarts/book-info/:BookId" docs={docs} user={user} />
            <BookInsights path="categories/book-smarts/book-info/:BookId/book-insight/:insightID" docs={docs} user={user} />
            <BookSmarts path="categories/book-smarts" docs={docs} user={user} />
            <Categories path="categories" user={user} />
            <Favorites path="favorites" user={user} />
            <Login path="login-page" user={user} handleUser={props.handleUser}/>
            <Rejection path="categories/sos/rejection" user={user} />
            <RegisteredUserProfile path ="/registereduserprofile" user={user} />
            <Screaming path="categories/sos/screaming" user={user} />
            <SignUp path="sign-up" user={user} />
            <SleepIssues path="categories/sos/sleep" user={user} />
            <SOS path="categories/sos" user={user} />
            <SplashScreen path="/" user={user} />
            <Tantrums path="categories/sos/tantrums" user={user} />
            <Welcome path="welcome" user={user} />
            <Whining path="categories/sos/whining" user={user} />
            <UpYourGame path="categories/up-your-game" user={user} />
            <ProfileSignIn path="/profile-sign-in" />
        </Router>
    )
};

export default Routes;
