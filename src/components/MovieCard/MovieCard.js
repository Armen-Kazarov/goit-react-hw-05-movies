import PropTypes from 'prop-types';
import NoImage from '../../images/No_Picture.jpg';
import s from './MovieCard.module.css';
export default function MovieCard({ movie }) {
  return (
    <>
      <img
        className={s.card}
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : NoImage
        }
        alt={movie.title}
      />
      <p className="">{movie.title}</p>
    </>
  );
}

MovieCard.propTypes = {
  id: PropTypes.object,
};
