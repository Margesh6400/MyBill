// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import Dashboard from './pages/Dashboard';
import UdharChallan from './pages/UdharChallan';
import JamaChallan from './pages/JamaChallan';
import Khatawahi from './pages/Khatawahi';
import Rojmel from './pages/Rojmel';
import Billing from './pages/Billing';

const App = () => {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/udhar-challan" element={<UdharChallan />} />
              <Route path="/jama-challan" element={<JamaChallan />} />
              <Route path="/khatawahi" element={<Khatawahi />} />
              <Route path="/rojmel" element={<Rojmel />} />
              <Route path="/billing" element={<Billing />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;


