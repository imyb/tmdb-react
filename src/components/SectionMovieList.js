import { Navigation, A11y, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { getBreakPointValue } from '@utils';
import useFetch from '@hooks/use-fetch';

import Error from './Error';
import Loading from './Loading';
import SectionMovieListItem from './SectionMovieListItem';

import styles from './SectionMovieList.module.scss';

const SectionMovieList = ({ sectionTitle, mediaType, url }) => {
  const { data, loading, error } = useFetch(url);
  const [movies, setMovies] = useState([]);
  const breakPointMedium = getBreakPointValue('medium');

  useEffect(() => {
    if (data && data.results) {
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
    }
  }, [data]);

  if (error) return <Error />;

  return (
    <>
      <section className={styles['SectionMovieList']}>
        <div className={styles['heading']}>
          <h1 className={styles['title']}>{sectionTitle}</h1>
        </div>
        <div className={styles['content']}>
          <Swiper
            className={styles['carousel']}
            wrapperTag="ul"
            // wrapperClass={styles['list']}
            modules={[Navigation, A11y, FreeMode]}
            navigation
            pagination={{
              clickable: true,
            }}
            slidesPerView={'auto'}
            // slidesPerView={5}
            // slidesPerGroup={5}
            freeMode={true}
            slidesPerGroupAuto={true}
            cssMode={true}
            breakpoints={{
              [breakPointMedium]: {
                cssMode: false,
              },
            }}
          >
            {loading || !movies.length ? (
              <Loading />
            ) : (
              movies.map((movie, index) => (
                <SwiperSlide tag="li" className={styles['item']} key={index}>
                  <SectionMovieListItem movie={movie} mediaType={mediaType} />
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
        <div className={styles['more']}>
          <span className="visualhidden">{sectionTitle}</span> 더보기
        </div>
      </section>
    </>
  );
};

export default SectionMovieList;
