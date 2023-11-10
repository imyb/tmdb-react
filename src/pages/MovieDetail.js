import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '@hooks/use-fetch';
import MovieDetailHead from '@components/Detail/MovieDetailHead';
import MovieDetailInfo from '@components/Detail/MovieDetailInfo';
import MovieDetailPeople from '@components/Detail/MovieDetailPeople';
import MovieDetailMedia from '@components/Detail/MovieDetailMedia';
import { useDispatch } from 'react-redux';
import {
  setMovieTitle,
  resetMovieTitle,
} from 'src/store/movie/movieTitleSlice';
import { setMovieName } from 'src/store/movie/movieNameSlice';

const MovieDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const movieId = params.movieId;
  const meidaType = 'movie';

  const { data, loading, error } = useFetch(
    `/movie/${movieId}?append_to_response=release_dates,credits,videos,images&include_image_language=en,null`
  );

  useEffect(() => {
    if (data) {
      dispatch(setMovieTitle({ title: data.title }));
      dispatch(setMovieName({ name: data.name }));
    }

    return () => {
      dispatch(resetMovieTitle());
    };
  }, [dispatch, data]);

  if (error) return <div>ERROR : {error.message}</div>;

  if (loading) return <div>loading...</div>;

  if (!data) return null;

  return (
    <>
      <MovieDetailHead movieData={data} mediaType={meidaType} />
      <MovieDetailInfo movieData={data} mediaType={meidaType} />
      <MovieDetailPeople movieData={data} mediaType={meidaType} />
      <MovieDetailMedia movieData={data} mediaType={meidaType} />
      {/*
        head
          - bg : backdrop
          - poster
          - 제목
          - 연령등급 | 장르 | 방송사 |
          - tagline
          - overview

        기본정보
          - 원제
          - 제작년도
          - 국가
          - 상영시간
          - 연령등급
          - tagline
          - 개요 overview

        출연/제작진

        미디어
          - 갤러리
          - 동영상





      */}
    </>
  );
};

export default MovieDetail;
