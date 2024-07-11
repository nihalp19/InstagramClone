import { onAuthStateChanged } from "firebase/auth";
import Router from "./components/routing/Router";
import Home from "./components/Home/Home";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
function App() {

  return (
    <div className="App">
       <Router/>
    </div>
  );
}

export default App;