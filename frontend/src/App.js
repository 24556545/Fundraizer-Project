import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import UnderConstruction from './pages/UnderConstruction';
import FundraiserDetails from './pages/FundraiserDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/fundraiser/:id" element={<FundraiserDetails />} /> {/* Dynamic Fundraiser Route */}
        <Route path="/underconstruction" element={<UnderConstruction />} />
      </Routes>
    </Router>
  );
}

export default App;
