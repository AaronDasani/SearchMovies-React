import React from 'react'

export default function suggestionMovies(props) {
  return (
    <div className="SuggestionMovie">
    
        {props.movies.length>=1 ? 
        
            props.movies.map(movie=>{
                return(
                    <div key={movie.imdbID} className="movieSug" onClick={props.addClass.bind(this,movie)}>
                        <h5>{movie.Title}</h5>
                        <small>{movie.Year}</small>
                    </div>
                )  
                
            })
            : <div><h5 className="errorText">Movies not Found</h5></div>
        }
    </div>
  )
}
