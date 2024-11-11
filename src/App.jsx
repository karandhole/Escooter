import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';
import HomePage from './Homepage/Homepage';
import WhatsAppChatButton from './Whatsapp/Whatsapp'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contact/Contact.jsx" element={<Contact />} />
      </Routes>
      <WhatsAppChatButton/> {/* Add the button here */}
      <Footer />
    </Router>
  );
};

export default App;
