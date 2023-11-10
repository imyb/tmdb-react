import classNames from 'classnames/bind';

import styles from './MovieDetailPeople.module.scss';
import { TMDB_IMAGE_URL_BASE } from '@constants/path';

const cx = classNames.bind(styles);

const MovieDetailPeople = ({ movieData }) => {
  return (
    <section className={cx('MoviDetailPeople')}>
      <h1 className={cx('heading')}>제작 &middot; 출연진</h1>
      <div className={cx('listwrap')}>
        <ul className={cx('list')}>
          {movieData.credits.crew
            .filter((crew) => crew.job === 'Director')
            .map((crew, index) => (
              <li key={index} className={cx('item')}>
                <div className={cx('card')}>
                  <div className={cx('image')}>
                    {crew.profile_path && (
                      <img
                        src={`${TMDB_IMAGE_URL_BASE}w185${crew.profile_path}`}
                        alt={crew.name}
                      />
                    )}
                  </div>
                  <div className={cx('names')}>
                    <div className={cx('name')}>{crew.name}</div>
                    <div className={cx('character')}>{crew.job}</div>
                  </div>
                </div>
              </li>
            ))}
          {movieData.credits.cast.slice(0, 10).map((cast, index) => {
            return (
              <li key={index} className={cx('item')}>
                <div className={cx('card')}>
                  <div className={cx('image')}>
                    {cast.profile_path && (
                      <img
                        src={`${TMDB_IMAGE_URL_BASE}w185${cast.profile_path}`}
                        alt={cast.name}
                      />
                    )}
                  </div>
                  <div className={cx('names')}>
                    <div className={cx('name')}>{cast.name}</div>
                    <div className={cx('character')}>{cast.character}</div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default MovieDetailPeople;
