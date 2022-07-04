import React from 'react';
import Header from './layout/Header'
import Contact from './pages/contact';
import SidebarHeader from './layout/SidebarHeader';

const App = () => {

  return (
    <>
      <Header></Header>
      
      <SidebarHeader/>
            
      <Contact/>
    </>
  );
}

export default App;
