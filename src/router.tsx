import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
        <h1>NeuroSlop</h1>
        <p>React + TypeScript + Vite успешно работают!</p>
      </div>
    ),
  },
]);
