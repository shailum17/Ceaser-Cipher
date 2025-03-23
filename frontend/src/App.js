import React from "react";
import { Routes, Route } from "react-router-dom";
import CipherForm from "./CipherForm.js"; // Encryption form
import CipherInfo from "./CipherInfo.js"; // Explanation page
import Header from "./Header.js"; // Import the header
import "./styles.css"; // Import styles

function App() {
  return (
    <div className="App">
      <Header /> {/* Navbar for navigation */}
      <div className="cipher-container">
        <Routes>
          <Route path="/" element={<CipherForm />} />
          <Route path="/learn" element={<CipherInfo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
