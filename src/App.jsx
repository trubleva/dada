import React, { useState, useEffect} from 'react';
import Routes from "./containers/Routes/Routes";
import NavBar from "./components/NavBar";
import firebase, { firestore } from "./firebase";

export const App = () => {

  // user state to be passed through Routes
  const [user, setUser] = useState();
  const [userData, setUserData] = useState();

  // check user onmount and if user changes
  const checkForUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('there is a user');
        getUserData();
        setUser(user);
      } else {
        console.log('no user')
        setUser(null);
      }
    });
  }

  const getUserData = () => {
    if(user){
      firestore.collection("users").doc(user.uid).get()
      .then(response => {
        let userDataUpdate = response.data();
        firestore.collection(`users/${user.uid}/chicks`).get()
          .then(response => {
            const documents = response.docs.map(d => d.data());
            userDataUpdate = {...userData, chicks: documents};
            setUserData(userDataUpdate);
          });
      });
    }
  }

  useEffect(() => {
    checkForUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  const NavBarJSX = window.location.pathname === "???" ? null : <NavBar user={user} />;

  console.log(window.location.pathname);

  return (
    <>
        {NavBarJSX}
        <Routes user={user} handleUser={setUser} userData={userData} getUserData={getUserData} />
    </> 
  )
}
export default App;