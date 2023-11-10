import { createBrowserRouter } from 'react-router-dom';

import Root from '@components/Layout/Root';
import Layout from '@components/Layout/Layout';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import Tv from '@pages/Tv';
import Movie from '@pages/Movie';
import TvDetail from '@pages/TvDetail';
import MovieDetail from '@pages/MovieDetail';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     errorElement: <NotFound />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: 'tv',
//         children: [
//           {
//             index: true,
//             element: <Tv />,
//           },
//           {
//             path: ':tvId',
//             element: <TvDetail />,
//           },
//         ],
//       },
//       {
//         path: 'movie',
//         children: [
//           {
//             index: true,
//             element: <Movie />,
//           },
//           {
//             path: ':movieId',
//             element: <MovieDetail />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        element: <Layout type="A" />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: 'tv',
            element: <Tv />,
          },
          {
            path: 'movie',
            element: <Movie />,
          },
        ],
      },
      {
        element: <Layout type="B" />,
        children: [
          {
            path: 'tv/:tvId',
            element: <TvDetail />,
          },
          {
            path: 'movie/:movieId',
            element: <MovieDetail />,
          },
        ],
      },
    ],
  },
]);

export default router;
