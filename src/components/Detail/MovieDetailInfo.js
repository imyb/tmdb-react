import classNames from 'classnames/bind';
import styles from './MovieDetailInfo.module.scss';

const cx = classNames.bind(styles);

const MovieDetailInfo = ({ movieData }) => {
  return (
    <section className={cx('MoviDetailInfo')}>
      <h1 className={cx('title')}>기본정보</h1>
      <div className={cx('original_title')}>{movieData.original_title}</div>
      <div className={cx('meta')}>
        <div className={cx('metaitem', 'release_date')}>
          {movieData.release_date}
        </div>
        <div className={cx('metaitem', 'genres')}>
          {movieData.genres.map((genre, index) => (
            <span key={index}>{genre.name}</span>
          ))}
        </div>
      </div>
      <div className={cx('overview')}>{movieData.overview}</div>
    </section>
  );
};

export default MovieDetailInfo;
