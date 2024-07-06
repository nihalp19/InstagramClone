import { onAuthStateChanged } from "firebase/auth";
import Router from "./components/routing/Router";
import Home from "./components/Home/Home";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
function App() {

  const [user,setUser] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      if(user)
        {
          setUser(true)
        }
        else
        {
          setUser(false)
        }
    })
  },[])

  return (
    <div className="App">
      {user ? (<Home/>) : (<Router/>)}
    </div>
  );
}

export default App;