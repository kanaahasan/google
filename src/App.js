import React from "react";
import Main from "./components/Main";
import Signin from "./components/Signin";
import { Routes,Route } from "react-router-dom";
function App() {
  return (
   <div>
    <Routes>
      <Route path="/" element={<Signin/>}/>
      <Route path="/main" element={<Main/>}/>
    </Routes>
    
   </div>
  );
}

export default App;
