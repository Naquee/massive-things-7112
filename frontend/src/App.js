
import { useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  const location = useLocation();
  console.log(location)
  return (
    <div className="App">
      {location.pathname === "/admin/dashboard" ? null : <Navbar />}
      <AllRoutes />
      {location.pathname === "/admin/dashboard" || location.pathname === "/checkout" ? null : <Footer />}
      
    </div>
  );
}

export default App;
