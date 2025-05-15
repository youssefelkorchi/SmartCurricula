import { createBrowserRouter } from 'react-router-dom';
import App from './App';

// Import your page components
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import NewGoal from './pages/NewGoal';
import PathView from './pages/PathView';
import Profile from './pages/Profile';

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/new-goal',
    element: <NewGoal />,
  },
  {
    path: '/path/:goalId',
    element: <PathView />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
]);

export default router;