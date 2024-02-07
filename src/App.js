import React from "react";
import { BrowserRouter as Router  } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <Router>
      <div className=""> 
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
