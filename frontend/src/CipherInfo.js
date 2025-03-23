import React from "react";
import "./styles.css";

const CipherInfo = () => {
  return (
    <div className="mac-window1">
      <div className="mac-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
      </div>
      <div className="content">
        < div class="main-heading">
        <h1>🔐 Caesar Cipher</h1>
        <p><strong>A Classical Encryption Technique</strong></p>
        <hr />
        </div>
        
<div class="info">
        <h2>📌 Overview</h2>
        <p>
          The <strong>Caesar Cipher</strong> is one of the oldest encryption methods. 
          It works by shifting letters forward by a fixed number of positions in the alphabet.
        </p>

        <h2>🔄 How It Works</h2>
        <ul>
          <li><strong>Choose a shift key (K)</strong>: Determines how many places each letter moves.</li>
          <li><strong>Encrypt</strong>: Each letter shifts forward by <code>K</code> positions.</li>
          <li><strong>Decrypt</strong>: Shift is reversed to retrieve the original text.</li>
        </ul>

        <h3>Example (Shift Key = 3)</h3>
        <table>
          <tbody>
            <tr><th>Plaintext</th><td>H</td><td>E</td><td>L</td><td>L</td><td>O</td></tr>
            <tr><th>Ciphertext</th><td>K</td><td>H</td><td>O</td><td>O</td><td>R</td></tr>
          </tbody>
        </table>

        <h2>💡 Strengths & Weaknesses</h2>

      <h3>✔ Advantages</h3>
      <ul>
        <li><strong>Simple & Fast</strong> – Easy to implement with minimal computation.</li>
        <li><strong>No Key Exchange Required</strong> – Only a shift value is needed.</li>
        <li><strong>Useful for Learning</strong> – A great introduction to cryptographic concepts.</li>
        <li><strong>Historical Significance</strong> – One of the earliest encryption techniques.</li>
      </ul>

      <h3>❌ Disadvantages</h3>
      <ul>
        <li><strong>Easily Breakable</strong> – Can be cracked using brute force (only 25 possible shifts).</li>
        <li><strong>No Key Variation</strong> – A fixed shift makes it predictable.</li>
        <li><strong>Does Not Hide Letter Frequency</strong> – Preserves patterns, making frequency analysis trivial.</li>
        <li><strong>Not Used in Modern Cryptography</strong> – Not secure against modern cryptanalysis.</li>
      </ul>
</div>

        <h2>🛠 Python Code</h2>
        <pre>
          <code>
{`def caesar_cipher(text, key, mode='encrypt'):
    alphabets = 'abcdefghijklmnopqrstuvwxyz'
    result = ''

    for letter in text.lower():
        if letter in alphabets:
            index = alphabets.find(letter)
            new_index = (index + key) % 26 if mode == 'encrypt' else (index - key) % 26
            result += alphabets[new_index]
        else:
            result += letter
    return result

# Encrypt
print(caesar_cipher("Hello World", 3))  

# Decrypt
print(caesar_cipher("Khoor Zruog", 3, mode='decrypt'))`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CipherInfo;
