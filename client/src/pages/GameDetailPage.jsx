import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

export const GameDetailPage = () => {
  const [data, setData] = useState(null);
  const params = useParams().gameID;

  useEffect(() => {
    dataCollect();
    console.log(data, 'asdfasdfa')
  }, []);

  const dataCollect = () => {
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
      params: {id: params},
      headers: {
        'X-RapidAPI-Key': '981413d213msh6c8f1ef99f1ec2ap1e383djsncb2028519a5d',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setData(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  };
  return (
    <div className="GameDetailPage">
      
    </div>
  )
}
