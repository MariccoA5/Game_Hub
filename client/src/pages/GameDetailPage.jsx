import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

export const GameDetailPage = () => {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    dataCollect();
    console.log(params)
  }, []);

  const dataCollect = () => {
    const options = {
      method: "GET",
      url: `https://api.rawg.io/api/games/${params.gameID}?key=870f7f5a45ba4878b47e5a3d23b5c6d5`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response, params)
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div className="GameDetailPage">GameDetail Page </div>
  )
}
