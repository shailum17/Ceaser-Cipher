import React, { useState } from 'react';
import { encryptText, decryptText } from './api.js';
import './styles.css';

function CipherForm() {
  const [text, setText] = useState('');
  const [key, setKey] = useState('');
  const [result, setResult] = useState('');

  const handleEncrypt = async () => {
    if (!text || isNaN(key) || key === '') {
      setResult("❌ Error: Invalid input");
      return;
    }
    try {
      const data = await encryptText(text, parseInt(key));
      console.log("Encryption Response:", data);
      setResult(data.ciphertext || "❌ Error: No ciphertext received");
    } catch (error) {
      console.error("Encryption Error:", error);
      setResult("❌ Error: Encryption failed");
    }
  };

  const handleDecrypt = async () => {
    if (!text || isNaN(key) || key === '') {
      setResult("❌ Error: Invalid input");
      return;
    }
    try {
      const data = await decryptText(text, parseInt(key));
      console.log("Decryption Response:", data);
      setResult(data.plaintext || "❌ Error: No plaintext received");
    } catch (error) {
      console.error("Decryption Error:", error);
      setResult("❌ Error: Decryption failed");
    }
  };

  return (
    <div className="mac-window">
      <div className="mac-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
      </div>
      <div className="cipher-container">
        <h1>🔐 Caesar Cipher</h1>
        <p><strong>A Classical Encryption Technique</strong></p>
        <hr />

        <input 
          type="text" 
          placeholder="Enter text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Enter shift key" 
          value={key} 
          onChange={(e) => setKey(e.target.value)} 
        />
        <div className="button-group">
          <button onClick={handleEncrypt}>Encrypt</button>
          <button onClick={handleDecrypt}>Decrypt</button>
        </div>

        <h3 className="result">Result: {result}</h3>
      </div>
    </div>
  );
}

export default CipherForm;
