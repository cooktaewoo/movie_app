import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'

function Movie({title, poster, genres, synopsis}) { // Dumb Component : State가 없다.
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster = {poster} alt={title} />
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Moive_Synopsis">
                <LinesEllipsis 
                    text={synopsis}
                    maxLine = '4'
                    ellipsis='...'
                    trimRight
                    baseOn='letters'/>
                </p>
            </div>
        </div>   
    )
}

function MoviePoster({poster, alt}) {
    return (
        <img src = {poster} alt={alt} className="Movie__Poster" />
    )
}

function MovieGenre({genre}) {
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

Movie.propTypes = {
        title : PropTypes.string.isRequired,
        poster : PropTypes.string.isRequired,
        genres : PropTypes.array.isRequired,
        synopsis : PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre : PropTypes.string.isRequired,
}

export default Movie