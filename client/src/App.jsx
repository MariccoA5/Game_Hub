import React, { useState, useEffect } from "react";
import axios from "axios";
import { HashRouter, Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "./utils/PrivateRoute";
// import { AuthProvider } from "./context/AuthContext";

import { HomePage } from "./pages/HomePage";
import { GenrePage } from "./pages/GenrePage";
import { SavedGames } from "./pages/SavedGames";
import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/SideBar";
import { GameDetailPage } from "./pages/GameDetailPage";

function App() {

  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [genreList, setGenreList] = useState([]);

  const toggleShow = () => setShow(!show);

  

  useEffect(() => {
    gameDataCollect();
    gameGenreCollect();
  }, []);

  const gameDataCollect = () => {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      headers: {
        "X-RapidAPI-Key": "981413d213msh6c8f1ef99f1ec2ap1e383djsncb2028519a5d",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const gameGenreCollect = () => {
    const options = {
      method: "GET",
      url: "https://api.rawg.io/api/genres?key=870f7f5a45ba4878b47e5a3d23b5c6d5",
      params: { page_size: 15, page: 1 },
    };

    axios
      .request(options)
      .then(function (response) {
        setGenreList(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };


  return (
    <HashRouter>
      {/* NAV BAR */}
      <NavBar toggleShow={toggleShow} />
      <div className="sideBarContainer">
        {show && <SideBar genres={genreList} />}
        
          <Routes>
            <Route path="/" element={<HomePage data={data} />} />
            <Route path="/saved-games" element={<SavedGames />} />
            <Route path="/game-detail/:gameID" element={<GameDetailPage />} />
            <Route path="/genre/:genre" element={<GenrePage />} />
          </Routes>
        
      </div>
    </HashRouter>
  );
}

export default App;
