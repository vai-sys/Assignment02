import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";
import Signup from "./components/Signup"; 
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />}>
           <Route path='home' element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
