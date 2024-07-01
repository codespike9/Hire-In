import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import deleteAccessToken from "../utils/deleteAccessToken";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  // const [userName,setUserName]=useState('');
  // const [userEmail,setUserEmail]=useState('')
  // const [userMobile_no,setUserMobile]=useState('')
  const [userData,setUser]=useState({})
  const [location,setLocation]=useState();

  const login = () => {
    setLoggedIn(true);
  };

  const setUserData=(data)=>{
    // setUserName(data.username)
    // setUserEmail(data.email)
    // setUserMobile(data.mobile_no)
    var userData={
      userRole:data.role,
      userName:data.username,
      userEmail:data.email,
      userMobile_no:data.mobile_no
    }
    if(userData.userRole==="Recruiter"){
      userData.companyId=data.companyId;
    }
    setUser(userData)
  }
  const logout = () => {
    setLoggedIn(false);
    deleteAccessToken();
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout,setUserData,userData, location, setLocation }}>
      {children}
    </AuthContext.Provider>
  );
};
