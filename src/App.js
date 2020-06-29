import React from 'react';
import './App.css';

fetch('http://localhost:3004/me', {
  mode: 'no-cors'
})
.then(res => res.json())
.then(response => console.log(response));
 

function App() {
  return (
    <div className="App">
    <form action="">
      <input type="text" placeholder='nombre'/>
      <input type="email" placeholder='email'/>
      <input type="password" placeholder='contraseña'/>
    </form>
    </div>
  );
}

export default App;
