import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages/Root';
import Board from './pages/board/Board';
import { boardLoader } from './pages/board/boardLoader';

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
