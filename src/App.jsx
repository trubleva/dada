import React, { useState, useEffect} from 'react';
import Routes from "./containers/Routes/Routes";
import NavBar from "./components/NavBar";
import firebase from "./firebase";

export const App = () => {

  // user state to be passed through Routes
  const [user, setUser] = useState();

  // check user onmount and if user changes
  const checkForUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('there is a user')
        setUser(user);
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
        <Routes user={user} handleUser={setUser} />
    </> 
  )
}
export default App;