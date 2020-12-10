import React, { useEffect } from "react";
import firebase from "../../firebase";
import { navigate } from "@reach/router";

const PrivateRoutes = (props) => { 
  const { children } = props
  
  useEffect(() =>{
    firebase.auth().onAuthStateChanged((user) => {
     !user ?  navigate("/sign-up") : navigate()
    }) 
  }, [])



  return <>{children}</>;
};

export default PrivateRoutes;