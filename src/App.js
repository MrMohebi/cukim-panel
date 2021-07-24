import React from "react";
import {BrowserRouter,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import CreateNewRes from "./Components/CreateNewRes/CreateNewRes";
import Manage from './Components/Manage/Manage'
import Login from "./Components/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path='/newRes' component={CreateNewRes}/>
        <Route exact path='/manage' component={Manage}/>
          <Route path = '/login' component={Login}/>
      </BrowserRouter>
    </>
  );
}

export default App;
