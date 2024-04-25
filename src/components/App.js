import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'; // Import the About component

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Include Navbar component */}
      <Home /> {/* Include Home component */}
      <About /> {/* Include About component */}
    </div>
  );
}

export default App;
