import React from 'react'
import { Link } from 'react-router-dom'



export const SideBar = ( {genre} ) => {

  


  return (
    <div>
      <div className='SideBarDiv'>
        <ul className="list-group0 list-group-flush">
          <li className="list-group-item">  Home</li>
          <li className="list-group-item">  Updated</li>
          <li className="list-group-item">  New</li>
          <li className="list-group-item">  Trending</li>
          <li className="list-group-item">  Random</li>
        </ul>
      </div>
      <div className="genreList">
        <ul>
          {genre ? genre.map((e) => {
            // <Link to={`/genre/${e.name}`}>{e.name}</Link>
            // key={e.id}
            return (
              
                  <li className="list-group-item" > {e.name} </li>
              
            );
          }) : null }
        </ul>
      </div>
    </div>
  )
}
