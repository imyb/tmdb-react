import { useMemo, useEffect, useReducer } from 'react';
import axiosInstance from '@api/api';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const useFetch = (url, deps = []) => {
  const instance = useMemo(() => axiosInstance, []);

  const initialState = {
    data: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: 'FETCH_LOADING' });

    try {
      const response = await instance.get(url);
      const data = response.data;

      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error });
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [...deps, url]);

  return state;
};

export default useFetch;
