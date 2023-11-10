import { useState, useEffect } from 'react';
import useFetch from '@hooks/use-fetch';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Loading from './Loading';
import MainMovieBannerItem from './MainMovieBannerItem';

import styles from './MainMovieBanner.module.scss';

const MainMovieBanner = ({ sectionTitle }) => {
  const [movies, setMovies] = useState([]);
  const { data, loading, error } = useFetch(`/trending/movie/week`);

  useEffect(() => {
    if (data && data.results) {
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
    }
  }, [data]);

  const handleSlideChange = (swiper) => {
    const { previousRealIndex, realIndex } = swiper;
    console.log({
      previousRealIndex,
      realIndex,
    });
  };

  if (error) return <div>ERROR : {error}</div>;

  return (
    <>
      <section className={styles['MainMovieBanner']}>
        <h1 className="visualhidden">{sectionTitle}</h1>

        {!movies.length || loading ? (
          <Loading />
        ) : (
          <Swiper
            className={styles['carousel']}
            wrapperTag="ul"
            // wrapperClass={styles['list']}
            modules={[Navigation, Pagination, A11y]}
            navigation
            pagination={{
              clickable: true,
            }}
            loop={true}
            loopedSlides={2}
            centeredSlides={true}
            onRealIndexChange={(swiper) => handleSlideChange(swiper)}
          >
            {movies?.slice(0, 5).map((movie, index) => (
              <SwiperSlide tag="li" className={styles['item']} key={index}>
                <MainMovieBannerItem
                  movieId={movie.id}
                  movieType={movie.media_type}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>
    </>
  );
};

export default MainMovieBanner;
