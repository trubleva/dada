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
        setUser(user);

        firestore.collection("users").doc(user.uid).get()
            .then(response => {
                let userData = response.data();
                firestore.collection(`users/${user.uid}/chicks`).get()
                  .then(response => {
                    const documents = response.docs.map(d => d.data());
                    userData = {...userData, chicks: documents}
                    setUserData(userData);
                  });
            }); 
      } else {
        console.log('no user')
        setUser(null);
      }
    });
  }

  useEffect(() => {
    checkForUser();
  },[])
  
  return (
    <>
        <NavBar user={user} />
        <Routes user={user} handleUser={setUser} userData={userData} />
    </> 
  )
}
export default App;