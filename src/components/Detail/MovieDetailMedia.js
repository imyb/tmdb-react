import classNames from 'classnames/bind';

import styles from './MovieDetailMedia.module.scss';

const cx = classNames.bind(styles);

const MovieDetailMedia = () => {
  return (
    <section className={cx('MoviDetailMedia')}>
      <h1 className="heading">미디어</h1>
    </section>
  );
};

export default MovieDetailMedia;
