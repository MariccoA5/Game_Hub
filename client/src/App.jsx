import React, {useState, useEffect} from "react";
import axios from "axios";
import { HashRouter, Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "./utils/PrivateRoute";
// import { AuthProvider } from "./context/AuthContext";

import { HomePage } from "./pages/HomePage";
import { SavedGames } from "./pages/SavedGames";
import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/SideBar";
import { GameDetailPage } from "./pages/GameDetailPage";

function App() {

  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  const [data, setData] = useState([])
  const [genreList, setGenreList] = useState([])

  useEffect(() => {
    gameDataCollect();
    gameGenreCollect();
  }, []);

  const gameDataCollect = () => {
    const options = {
      method: "GET",
      url: "https://api.rawg.io/api/games?key=870f7f5a45ba4878b47e5a3d23b5c6d5",
      params: { "page_size" : 36,
    "page": 1 },
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
    }

  const gameGenreCollect = () => {
    const options = {
      method: "GET",
      url: "https://api.rawg.io/api/genres?key=870f7f5a45ba4878b47e5a3d23b5c6d5",
      params: { "page_size" : 36,
    "page": 1 },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data)
        setGenreList(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
    }

  return (
    <HashRouter>
      {/* NAV BAR */}
      <NavBar toggleShow={toggleShow} />
      <div className="sideBarContainer">
        {show && <SideBar genres={genreList} />}
        <Routes>
            <Route path="/" element={<HomePage data={data}/>} />
            <Route path="/saved-games" element={<SavedGames />} />
            <Route path="/game-detail/:gameID" element={<GameDetailPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
