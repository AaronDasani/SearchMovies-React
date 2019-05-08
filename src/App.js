
import React, { Component } from 'react';
import './App.css';
import unavailableImg from './images/unavailableImg.png';
import SearchBar from './component/searchBar';
import AllSearchedMovies from './component/allSearchedMovies'

class App extends Component {
  constructor(){
    super();
    this.state={
      pageOneClass:"pt-page pt-page-1",
      pageTwoClass:"pt-page pt-page-2",
      pageAllMovies:"AllMovies",
      selectedMovie:Object,
      suggestedMovies:[]
    }
  }

  addClass=(movie)=>{
    console.log(movie);
    this.setState((state)=>{
      state.pageOneClass="pt-page pt-page-1 pt-page-scaleDown";
      state.pageTwoClass="pt-page pt-page-2 moveUpEffect pt-page-MoveUp";
      state.selectedMovie=movie;
      return state;
    })
    console.log("click");
  }
  revertBackClass=()=>{
    this.setState(state=>{
      state.pageOneClass="pt-page pt-page-1 pt-page-scaleUp";
      state.pageTwoClass="pt-page pt-page-2 pt-page-MoveDown ";
      return state;
    })
  }

  // All Movies Title Equal to user input 
  allSuggestedMovie=(movies)=>{
    this.setState(state=>{
      state.pageAllMovies="AllMovies movies-MoveLeft"
      state.suggestedMovies=movies
      return state;
    })
  }
  HideSearchedMovies=()=>{
    this.setState({pageAllMovies:"AllMovies movies-MoveRight"})
  }

  render() {
    let movie=this.state.selectedMovie;
    return (
      
      <div className="pt-perspective">
        <div className={this.state.pageOneClass}>
          <div>
            <h1><span>Search</span><strong> Movies</strong></h1>
            <SearchBar addClass={this.addClass} allSuggestedMovie={this.allSuggestedMovie}/>
          </div>
        </div>
        <div className={this.state.pageTwoClass}>
          <div>
              <img src={movie.Poster} alt="Movie Poster" onError={(event)=>event.target.setAttribute("src",unavailableImg)}></img>
              <h1>{movie.Title}</h1>
              <small>{movie.Year}</small>
              <button onClick={this.revertBackClass} className="closeBtn"><i className="fas fa-times"></i></button>
          </div>
        
        </div>
        <AllSearchedMovies  movies={this.state.suggestedMovies} addClass={this.addClass} DivClassNames={this.state.pageAllMovies} HideSearchedMovies={this.HideSearchedMovies}/>
        
      </div>
        
      
    )
  }
}


export default App;
