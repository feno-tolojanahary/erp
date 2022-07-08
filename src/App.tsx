import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './layout/Header'
import Contacts from './pages/contact/Contacts';
import CreateContact from './pages/contact/CreateContact';
import NavBar from './layout/NavBar';
import { ActionsContext, NavAction } from './context/actions';

const initialNavAction = {
  button: 'listing',
  page: 'contacts',
  prevUrl: null
}

const App = () => {

  const [navAction, setNavAction] = useState<NavAction>(initialNavAction);

  return (          
    <BrowserRouter>
      <ActionsContext.Provider value={{setNavAction}}>
        <Header></Header>
        
        <NavBar
          navAction={navAction}
        />
        <Routes>
          <Route path="/" element={<Contacts/>} />
          <Route path="contact" element={<Contacts/>} />
          <Route path="contact/create" element={<CreateContact/>} />
        </Routes>
      </ActionsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
