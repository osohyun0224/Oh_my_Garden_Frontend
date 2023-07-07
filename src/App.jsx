import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InsertInfo from './pages/InsertInfo';
import Disease from './pages/Disease';
import LifeMove from './pages/LifeMove';
import GoPro from './pages/GoPro';
import SignUp from './pages/Member/SignUp';
import Login from './pages/Member/Login';
import MyPage from './pages/Member/MyPage';
import Home from './pages/Home';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insertinfo" element={<InsertInfo />} />
        <Route path="/disease" element={<Disease />} />
        <Route path="/lifemove" element={<LifeMove />} />
        <Route path="/gopro" element={<GoPro />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
