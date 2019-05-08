import React from 'react'
import unavailableImg from '../images/unavailableImg.png';

export default function allSearchedMovies(props) {
  return (
    <div className={props.DivClassNames}>
        <button onClick={props.HideSearchedMovies} className="closeBtn "><i className="fas fa-times"></i></button>
        
        {
            props.movies.map(movie=>{
                return( 
                    <div key={movie.imdbID} onClick={props.addClass.bind(this,movie)}>
                        <img src={movie.Poster} alt="movie Poster" onError={(event)=>event.target.setAttribute("src",unavailableImg)}></img>
                        <h4>{movie.Title}</h4>
                        <small>Release Year: {movie.Year}</small>
                    </div>
                )
            })
        }
        
    </div>
  )
}

