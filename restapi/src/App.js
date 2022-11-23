import { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [user, setUser] = useState();

  const userData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    userData();
  }, []);

  return (
    <div className="App">
      <h1>REACT JS API with fetch method</h1>
      <ul>
        {user && user.map((item, i) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
