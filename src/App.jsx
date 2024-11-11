import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header'; // Adjust the path if needed
import Footer from './Footer/Footer';
// import EScooter from './pages/EScooter';
// import EBicycles from './pages/EBicycles';
// import Rental from './pages/Rental';
// import Toys from './pages/Toys';

import Contact from './Contact/Contact';
import HomePage from './Homepage/Homepage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/e-scooter" element={<EScooter />} />
        <Route path="/e-bicycles" element={<EBicycles />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/toys" element={<Toys />} /> */}
        <Route path="/Contact/Contact.jsx" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
