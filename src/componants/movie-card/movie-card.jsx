import React from 'react';
import PropTypes from 'prop-types';
import './movie-card.scss'
export class MovieCard extends React.Component {
render() {
    const { movie, onMovieClick } = this.props;

    return (
        <div key={movie._id} onClick={() => onMovieClick(movie)} className="movie-card" >{movie.Title}</div>
    );
    }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
  };
