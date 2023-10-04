import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';

const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState(undefined);
  const token = Cookies.get('token');

  async function getUser(){
    const data={
      'token':token
    }
    const userRes = await axios.post("http://localhost:80/napier/validateToken.php",data,{withCredentials: true});
    setUser(userRes.data);
  }

  useEffect(() => {
    if(token){
      getUser();
    }
  },[]);

  return(
    <UserContext.Provider value={{user,getUser}}>{props.children}</UserContext.Provider>
  )
}

export default UserContext;
export {UserContextProvider}