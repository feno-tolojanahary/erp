import React from 'react';
import Header from './layout/Header'
import Contact from './pages/contact';
import NavBar from './layout/NavBar';

const App = () => {

  return (
    <>
      <Header></Header>
      
      <NavBar/>
            
      <Contact/>
    </>
  );
}

export default App;
