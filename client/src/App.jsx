import React, { createContext } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

import { HomePage } from "./pages/HomePage";
import { SavedGames } from "./pages/SavedGames";
import { NavBar } from "./components/NavBar";

const AuthContext = createContext();

function App() {
  let contextData = {
    loginUser: "loginUser",
  };

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/saved-games" element={<SavedGames />} />
            {/* MORE THINGS TO DO!!  */}
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
