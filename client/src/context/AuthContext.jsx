import { useContext } from "react";
import { createContext, useState} from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // let [authTokens, setAuthTokens] = useState(null)
  let [user, setUser] = useState("user");

  // let loginUser = async () => {
  //   console.log("Form Submitted");

  //   let response = fetch("http://127.0.0.1:8000/api/token/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ username: null, password: null }),
  //   });
  //   return;
  // };
  // //  USE AUTH DAVE GRAY YTTT
  // let contextData = {
  //   loginUser: loginUser,
  // };

  return (
    <AuthContext.Provider>{children}</AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
