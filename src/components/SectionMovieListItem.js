import { Link } from 'react-router-dom';

import styles from './SectionMovieList.module.scss';
import { TMDB_IMAGE_URL_BASE } from '@constants';

const SectionMovieListItem = ({ movie, mediaType }) => {
  return (
    <>
      <Link to={`${mediaType}/${movie.id}`} className={styles['item-box']}>
        <div className={styles['item-img']}>
          {movie.poster_path && (
            <img
              src={`${TMDB_IMAGE_URL_BASE}w300${movie.poster_path}`}
              alt={movie.title || movie.name}
            />
          )}
        </div>
        <div className={styles['item-title']}>{movie.title || movie.name}</div>
      </Link>
    </>
  );
};

export default SectionMovieListItem;
