import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import './Movies.scss';



function Movies ({year,title,summary,poster,genres}) {
    return (
        <Link to = {{
            pathname: '/movie-detail',
            state : {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>  
            <div className ="movie"> 
            <div className ="movie__left"> 
            <img src={poster} alt ={title} title ={title}/>
            </div>
            
            <div className ="movie__right">
            <div className="movie__date">
            <h3 className ="movie__title">{title}</h3>
            <h5 className ="movie__year">{year}</h5>
            <ul className ="genres">{genres.map( (genre,index) => <li key = {index} className="genres__genres" >{genre}</li>)} </ul>
            <p className ="movie__summary">{summary.slice(0,80)}</p>
            </div>
            </div>
            </div>
         </Link>
    )
}

Movies.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired 

}


export default Movies;