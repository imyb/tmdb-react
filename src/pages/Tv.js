import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '@hooks/use-fetch';

const Tv = () => {
  const [page, setPage] = useState(1);
  const [tvs, setTvs] = useState([]);
  const { data, loading, error } = useFetch(`/trending/tv/week?page=${page}`);

  useEffect(() => {
    if (data && data.results) {
      setTvs((prevTvs) => [...prevTvs, ...data.results]);
    }
  }, [data]);

  const handleMoreList = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (error) return <div>ERROR : {error}</div>;

  if (loading && data && page === 1) return <div>loading...</div>;

  return (
    <>
      <div>Tv</div>
      <hr />
      <ul>
        {tvs?.map((tv) => {
          return (
            <li key={tv.id}>
              <Link to={`${tv.id}`}>{tv.title || tv.name}</Link>
            </li>
          );
        })}
      </ul>
      <button onClick={handleMoreList}>
        더보기 ({page}/{data?.total_pages})
      </button>
    </>
  );
};

export default Tv;
