import React from 'react';
import Homepage from "./pages/home"
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <Route exact path="/" component={Homepage} />
        
      </div>
    </Router>

    </div>
  );
}

export default App;
