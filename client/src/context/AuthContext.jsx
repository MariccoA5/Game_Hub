import { useContext } from "react";
import { createContext, useState, useEffect } from "react";
const AuthContext = createContext()



export const AuthProvider = ({children}) => {

  // let [authTokens, setAuthTokens] = useState(null)
  let [user, setUser] = useState('user', null)

  let loginUser = async (e) => {
    console.log(e)
    setUser(e)
    console.log('Form Submitted')

    let response = fetch('http://127.0.0.1:8000/api/token/', {
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({'username':null, 'password':null})
  })
  }
//  USE AUTH DAVE GRAY YTTT
  let contextData = {
    loginUser:loginUser
   }

  return (
    <AuthContext.Provider value={contextData} >
      {children}
    </AuthContext.Provider>
  )
};
export const useAuth = () => {
  return useContext(AuthContext);
};
