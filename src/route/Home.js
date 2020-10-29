import React from 'react';
import axios from 'axios'; 
import Movies from '../component/Movies';
import './Home.scss';


class Home extends React.Component {

  state = {
    isLoading : true,
    movies : []
  };

  getMovies = async () => {  
    const {data :
    {data :  {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
      this.setState({movies,isLoading :false})
  }

  componentDidMount() {
    this.getMovies();

  }
  
  render() {
    const {isLoading,movies} = this.state;
    return (
      
      <section className ="container">
       <div className ="flex">

        {isLoading ?( <div className ="loader"><span className= "loader__text">Loading...</span> </div> ): (  
        movies.map(movie => <Movies key ={Movies.id} id ={movie.id} year ={movie.year} summary ={movie.summary} poster ={movie.medium_cover_image} title ={movie.title}  genres ={movie.genres}/>  ))}
     
      

       </div> 
      </section>
 
    );
  }
}

export default Home;

      