import MapComponent from './components/MapComponent';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import RegisterPage from './components/register';
import LoginPage from './components/login';
import HomePage from "./components/HomePage";
import RoutePage from "./components/RoutePage";
import MapPage from "./components/MapPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/map" element={<MapComponent />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/route" element={<RoutePage />} />
        <Route path="/mappage" element={<MapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
