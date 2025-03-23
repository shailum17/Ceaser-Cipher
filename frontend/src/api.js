export async function encryptText(plaintext, key) {
  try {
    const response = await fetch("http://localhost:5000/encrypt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ plaintext, key })
    });
    return response.json();
  } catch (error) {
    console.error("Error calling encryption API:", error);
    return { error: "Encryption failed" };
  }
}

export async function decryptText(ciphertext, key) {
  try {
    const response = await fetch("http://localhost:5000/decrypt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ciphertext, key })
    });
    return response.json();
  } catch (error) {
    console.error("Error calling decryption API:", error);
    return { error: "Decryption failed" };
  }
}
