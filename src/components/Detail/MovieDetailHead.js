import { TMDB_IMAGE_URL_BASE } from '@constants';
import { useEffect, useState } from 'react';
import { getBreakPointValue, convertMinutesToTime } from '@utils';

import styles from './MovieDetailHead.module.scss';

const MovieDetailHead = ({ movieData, mediaType }) => {
  const [movie, setMovie] = useState(null);
  const breakPointMedium = getBreakPointValue('medium');

  useEffect(() => {
    if (movieData) {
      setMovie((prevMovie) => ({
        ...prevMovie,
        ...movieData,
        title: movieData.title || movieData.name,
        runtimeDuration: convertMinutesToTime(movieData.runtime),
      }));
    }
  }, [movieData]);

  if (!movie) return null;

  return (
    <section className={styles['MoviDetailHead']}>
      <div className={styles['backdrop']} aria-hidden="true">
        <picture className={styles['img']}>
          <img
            src={`${TMDB_IMAGE_URL_BASE}w1280${movie.backdrop_path}`}
            srcSet={`${TMDB_IMAGE_URL_BASE}w1280${movie.backdrop_path} ${breakPointMedium}w, ${TMDB_IMAGE_URL_BASE}original${movie.backdrop_path}`}
            alt={movie.title}
          />
        </picture>
      </div>
      <div className={styles['contents']}>
        <div className={styles['title']}>{movie.title}</div>
        <div className={styles['meta']}>
          <div className={`${styles['metaitem']} ${styles['release_date']}`}>
            {movie.release_date}
          </div>
          <div className={`${styles['metaitem']} ${styles['runtime']}`}>
            {movie.runtimeDuration.hours}시간 {movie.runtimeDuration.minutes}분
          </div>
          <div className={`${styles['metaitem']} ${styles['genres']}`}>
            {movie.genres[0].name}
          </div>
        </div>
        {movie.tagline && (
          <div className={styles['tagline']}>{movie.tagline}</div>
        )}
      </div>
    </section>
  );
};

export default MovieDetailHead;
