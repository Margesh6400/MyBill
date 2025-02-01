// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/common/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UdharChallan from './pages/UdharChallan';
import JamaChallan from './pages/JamaChallan';
import Khatawahi from './pages/Khatawahi';
import Rojmel from './pages/Rojmel';
import Billing from './pages/Billing';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route */}
        <Route path="/login" element={<Login />} />
        
        {/* Protected routes */}
        <Route path="/" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="udhar-challan" element={<UdharChallan />} />
          <Route path="jama-challan" element={<JamaChallan />} />
          <Route path="khatawahi" element={<Khatawahi />} />
          <Route path="rojmel" element={<Rojmel />} />
          <Route path="billing" element={<Billing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;