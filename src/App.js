import React from "react";
import {BrowserRouter,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import CreateNewRes from "./Components/CreateNewRes/CreateNewRes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path='/newRes' component={CreateNewRes}/>
      </BrowserRouter>
    </>
  );
}

export default App;
