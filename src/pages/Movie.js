import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '@hooks/use-fetch';

const Movie = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const { data, loading, error } = useFetch(
    `/trending/movie/week?page=${page}`
  );

  useEffect(() => {
    if (data && data.results) {
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
    }
  }, [data]);

  const handleMoreList = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (error) return <div>ERROR : ${error}</div>;

  if (loading && data && page === 1) return <div>loading...</div>;

  return (
    <>
      <div>Movie</div>
      <hr />
      <ul>
        {movies?.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
      <button onClick={handleMoreList}>
        더보기 ({data?.page}/{data?.total_pages})
      </button>
    </>
  );
};

export default Movie;
