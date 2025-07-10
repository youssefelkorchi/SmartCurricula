import { createBrowserRouter } from 'react-router-dom';

// Import your page components
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import NewGoal from './pages/NewGoal';
import PathView from './pages/PathView';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';

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
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

export default router;