import React from 'react'
import { Link } from 'react-router-dom'



export const SideBar = ( {genres} ) => {

  const randomint = () => {
    
    return Math.floor(Math.random() * 371);

  };


  return (
      <div className='homeContainer'>
        <ul className="list-group0 list-group-flush">
          <li><Link className="list-group-item0" to={`/`}>Home</Link></li>
          <li><Link className="list-group-item0" to={`/profile`}>Profile</Link></li>
          <li><Link className="list-group-item0" to={`/melo`}>Maricco's Created Games</Link></li>
          <li><Link className="list-group-item0" to={`/genre/Trending`}>Trending</Link></li>
          <li><Link className="list-group-item0" to={`/game/${randomint()}`}>Random</Link></li>
        </ul>
      
      

        <ul className="list-group1 list-group-flush"> 
          {genres ? genres.map((e) => {
            return (
             
              <Link className="list-group-item1" to={`/genre/${e.name}`}>{e.name}<br></br><br></br></Link>
              
            );
          }) : null }
        </ul>

      

      </div>
  )
}
 
