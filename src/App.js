import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// Box component removed - using div instead
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

// A wrapper component to handle protected routes
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  console.log('ProtectedRoute - isAuthenticated:', isAuthenticated);
  if (!isAuthenticated) {
    console.log('Redirecting to /login');
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  console.log('App component rendering');
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          {/* Add more protected routes here */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
