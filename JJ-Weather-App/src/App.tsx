import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages/Root';
import Board from './pages/board/Board';
import { boardLoader } from './pages/board/boardLoader';
import SearchBoard from './pages/searchBoard/SearchBoard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Board />,
        loader: boardLoader,
      },
      {
        path: 'search/:city',
        element: <SearchBoard />,
      },
    ],
  },
]);

function App() {
  return (
    <div className='container mx-auto px-12'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
