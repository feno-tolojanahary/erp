import React, { useState } from 'react';
import {
  BrowserRouter, RouterProvider
} from "react-router-dom";
import Header from './layout/Header'

import NavBar from './layout/NavBar';
import { ActionsContext, NavAction } from './context/actions';
import router from "./routes/index"

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
        <RouterProvider router={router} />
      </ActionsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
