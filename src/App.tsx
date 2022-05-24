// @ts-nocheck

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DefaultSideBar from './layout/DefaultSideBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Interviews from './pages/Interviews';
import Portfolio from './pages/Portfolio';
import InterviewDetails from './pages/InterviewDetails';
import Shop from './pages/Shop';

export const App = () => {
  return (
    <Router>
      <div className='container'>
        <DefaultSideBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/interviews' element={<Interviews />} />
            <Route
              path='/interviewDetails/:id'
              element={<InterviewDetails />}
            />
            <Route path='/about' element={<About />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/portfolio' element={<Portfolio />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
