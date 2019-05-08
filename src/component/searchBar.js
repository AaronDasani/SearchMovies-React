import React, { Component } from 'react'
import axios from 'axios';
import SuggestionMovies from './suggestionMovies';
export default class searchBar extends Component {

    constructor(){
        super();
        this.state={
            suggestionMovies:[]
        }
    }

    onChange=(event)=>{
        if(event.target.value.length>4){
            axios.get(`http://www.omdbapi.com/?apikey=[API_KEYS]&plot=short&s=${event.target.value}`)
                .then((response)=>{
                    console.log(response);
                    this.setState(state=>{
                        return state.suggestionMovies=response.data.Search;

                    })
                })
                .catch((error)=>{
                    console.log(error);
                })
        }
    }
    onSubmit=(event)=>{
        event.preventDefault();
        this.props.allSuggestedMovie(this.state.suggestionMovies);
    }

    render() {
    return (
        <div className="SearchBox">
            <form onSubmit={this.onSubmit}>
                <input type="text" name="movieName" onChange={this.onChange} placeholder="Search Movies/TvShows"></input>
                <button type="submit">Search</button>
            </form>
            <SuggestionMovies movies={this.state.suggestionMovies} addClass={this.props.addClass}/>
        </div>
    )
    }
}
