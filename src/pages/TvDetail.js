import { useParams, useLocation } from 'react-router-dom';
import useFetch from '@hooks/use-fetch';

const TvDetail = () => {
  const { state } = useLocation();
  const params = useParams();
  const tvId = params.tvId;
  const mediaType = state?.mediaType || null;

  const { data, loading, error } = useFetch(`/tv/${tvId}`);

  if (error) return <div>ERROR : {error}</div>;

  if (loading) return <div>loading...</div>;

  if (!data) return null;

  return (
    <>
      <div>TvDetail</div>
      <p>media type : {mediaType}</p>
      <p>tvId : {tvId}</p>
      <p>{data.name}</p>
    </>
  );
};

export default TvDetail;
