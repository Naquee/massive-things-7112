import { useLocation } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import HomePage from "./Components/HomePage"


function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === "/admin/dashboard" ? null : <Navbar />}
      <AllRoutes />
      {location.pathname === "/admin/dashboard" ? null : <Footer />}
    </div>
  );
}

export default App;
