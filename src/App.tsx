import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './layout/Header'
import Contacts from './pages/contact/Contacts';
import CreateContact from './pages/contact/CreateContact';
import NavBar from './layout/NavBar';

const App = () => {

  return (          
    <BrowserRouter>
      <Header></Header>
      
      <NavBar/>
      <Routes>
        {/* <Route path="/" element={<Contacts/>}>
          <Route path="contact" element={<CreateContact/>} >
            <Route path="create" element={<CreateContact/>} />
          </Route>
        </Route> */}
        <Route path="/" element={<Contacts/>} />
        <Route path="contact" element={<Contacts/>} />
        <Route path="contact/create" element={<CreateContact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
