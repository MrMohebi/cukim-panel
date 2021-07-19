import React from "react";
import {BrowserRouter,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import CreateNewRes from "./Components/CreateNewRes/CreateNewRes";
import Manage from './Components/Manage/Manage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path='/newRes' component={CreateNewRes}/>
        <Route exact path='/manage' component={Manage}/>
      </BrowserRouter>
    </>
  );
}

export default App;
