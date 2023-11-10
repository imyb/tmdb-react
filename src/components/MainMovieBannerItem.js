import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '@hooks/use-fetch';

import styles from './MainMovieBanner.module.scss';
import { TMDB_IMAGE_URL_BASE } from '@constants';
import { getBreakPointValue } from '@utils';

const MainMovieBannerlItems = ({ movieId, movieType }) => {
  const [movie, setMovie] = useState(null);
  const { data, loading, error } = useFetch(`${movieType}/${movieId}`);
  const breakPointMedium = getBreakPointValue('medium');

  useEffect(() => {
    if (data) {
      setMovie((prevMovie) => ({
        ...prevMovie,
        ...data,
        title: data.title || data.name,
      }));
    }
  }, [data]);

  if (loading) return <div>item loading</div>;

  if (error) return <div>item error</div>;

  if (!movie) return null;

  return (
    <>
      <div className={styles['item-box']}>
        <div className={styles['item-visual']}>
          <picture className={styles['img']}>
            <img
              src={`${TMDB_IMAGE_URL_BASE}w1280${movie.backdrop_path}`}
              srcSet={`${TMDB_IMAGE_URL_BASE}w1280${movie.backdrop_path} ${breakPointMedium}w, ${TMDB_IMAGE_URL_BASE}original${movie.backdrop_path}`}
              alt={movie.title}
            />
          </picture>
        </div>
        <div className={styles['item-body']}>
          <div className={styles['item-content']}>
            <div className={styles['item-title']}>{movie.title}</div>
            <div className={styles['item-info']}>
              <div className={styles['item-tagline']}>{movie.tagline}</div>
              <div className={styles['item-genres']}>
                {movie.genres.map((genre, index) => {
                  return <span key={index}>{genre.name}</span>;
                })}
              </div>
            </div>
          </div>

          <div className={styles['item-action']}>
            <Link to={`${movieType}/${movieId}`}>
              <span className="visualhidden">{movie.title || movie.name}</span>{' '}
              자세히 보기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMovieBannerlItems;
