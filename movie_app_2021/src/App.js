import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{ // state를 이용하기 위해서 class component를 사용 
  state = {
    isLoading : true, 
    movies : []
  };

  getMovies = async() =>{
    //const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
    const {
      data : {
        data : {movies}
      }      
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    //console.log("TEST : ", movies);
    this.setState({movies, isLoading : false});
  }

  componentDidMount(){
    // setTimeout(()=>{
    //   this.setState({isLoading : false});
    // }, 6000);
    this.getMovies();
  }

  render(){
    // const {isLoading} = this.state;
    // return <div>
    //   {isLoading ? "Loading..." : "We are ready"}
    // </div>;
    const {isLoading, movies} = this.state;
    return(
    <div>
      {isLoading ? "Loading..." : movies.map(movie => (
        // console.log("TEST > ", movie),
        <Movie
          key = {movie.id}
          id = {movie.id}
          year = {movie.year}
          title = {movie.title}
          summary = {movie.summary}
          poster = {movie.medium_cover_image}
        />
      ))}
    </div>
    );
    
    

  }
}

export default App;
