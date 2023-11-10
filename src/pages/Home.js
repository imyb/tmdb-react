import MainMovieBanner from '@components/MainMovieBanner';
import SectionMovieList from '@components/SectionMovieList';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <>
      <MainMovieBanner sectionTitle="통합 이번주 인기 Top5" />

      <div className={styles['SectionMovieListWrapper']}>
        <SectionMovieList
          sectionTitle="이번주 영화 Top20"
          mediaType="movie"
          url="/trending/movie/week"
        />
        <SectionMovieList
          sectionTitle="이번주 TV프로그램 Top20"
          mediaType="tv"
          url="/trending/tv/week"
        />
        <SectionMovieList
          sectionTitle="넷플릭스"
          mediaType="tv"
          url="/discover/tv?&with_networks=213"
        />
        <SectionMovieList
          sectionTitle="디즈니+"
          mediaType="tv"
          url="/discover/tv?&with_networks=2739"
        />
        <SectionMovieList
          sectionTitle="웨이브"
          mediaType="tv"
          url="/discover/tv?&with_networks=3357"
        />
        <SectionMovieList
          sectionTitle="티빙"
          mediaType="tv"
          url="/discover/tv?&with_networks=3897"
        />
      </div>

      {/*
        ## HOME
        - 통합 이번주 top5 : /trending/all/week :  메인 배너(swipe)

        - 이번주 영화 top20 : /trending/movie/week
        - 이번주 TV top20 : /trending/tv/week

        - 현재 인기 영화 : /movie/popular
        - 현재 상영 영화 : /movie/now_playing
        - 평점 높은 영화 : /movie/top_rated
        - 개봉 예정 영화 : /movie/upcoming

        - 현재 인기 TV : /tv/popular
        - 오늘 방영 TV : /tv/airing_today
        - 현재 방영 중인 TV : /tv/on-the-air
        - 높은 평점의 TV : /tv/top-rated
        - 방송사 TV : /discover/tv?&with_networks=${network_id}
          - 넷플릭스 : 213
          - 디즈니+ : 2739
          - 티빙 : 3897
          - 웨이브 : 3357


        ## MOVIE > MAIN
        - 장르 tag : /genre/movie/list
        - 이번주 영화 top20 : /trending/movie/week
        - 현재 인기 영화 : /movie/popular
        - 현재 상영 영화 : /movie/now-playing
        - 평점 높은 영화 : /movie/top_rated
        - 개봉 예정 영화 : /movie/upcoming

        ## TV > MAIN
        - 장르 tag : /genre/tv/list
        - 이번주 TV top20 : /trending/tv/week
        - 현재 인기 TV : /tv/popular
        - 오늘 방영 TV : /tv/airing_today
        - 현재 방영 중인 TV : /tv/on-the-air
        - 높은 평점의 TV : /tv/top-rated
        - 방송사 TV : /discover/tv?with_networks=${network_id}
          - 넷플릭스 : 213
          - 디즈니+ : 2739
          - 티빙 : 3897
          - 웨이브 : 3357


        ## MOVIE > LIST
        - 전체 리스트 : /discover/movie
        - 필터
          - 장르(?with_genres)
          - 정렬(?sort_by) : 인기순(Popular.desc), 최신순(release_date.desc)

        ## TV > LIST
        - 전체 리스트 : /discover/tv
        - 필터
          - 장르(?with_genres)
          - 방송사(?with_networks)
          - 정렬(?sort_by) : 인기순(Popular.desc), 최신순(release_date.desc)


        ## MOVIE > DETAIL
        -


        ## TV > DETAIL
        -


      */}
    </>
  );
};

export default Home;
