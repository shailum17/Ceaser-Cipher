# Caesar Cipher Web Application

## 📌 Project Overview
This is a web-based Caesar Cipher encryption and decryption tool built with **React.js (frontend)** and **Flask (backend)**. It allows users to encrypt and decrypt text using a shift key.

## 🚀 Features
- Encrypt text using the **Caesar Cipher** algorithm
- Decrypt text with a given shift key
- Learn about the Caesar Cipher with an interactive UI
- Responsive and lightweight design

## 🛠️ Tech Stack
### **Frontend:**
- React.js
- React Router
- CSS for styling

### **Backend:**
- Flask
- Flask-CORS
- Python

## 📥 Installation Guide

### 🔹 Prerequisites
Before you start, ensure you have the following installed:
- **Node.js** (Download from [here](https://nodejs.org/))
- **npm** (Comes with Node.js)
- **Python** (Version 3.x recommended)
- **Flask** (Install with `pip install flask`)

---
### **1️⃣ Clone the Repository**
```sh
# Using Git
git clone https://github.com/yourusername/caesar-cipher-web.git
cd caesar-cipher-web
```

---
### **2️⃣ Frontend Setup**
```sh
cd frontend
npm install  # Install dependencies
npm start    # Run the development server
```
If you face issues, try clearing the cache:
```sh
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm start
```

---
### **3️⃣ Backend Setup**
```sh
cd backend
pip install -r requirements.txt  # Install dependencies
python app.py  # Start Flask server
```

## 📦 Dependencies
### **Frontend:**
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.15.0"
  }
}
```
Install dependencies with:
```sh
npm install
```

### **Backend:**
```sh
pip install flask flask-cors
```

---
## 🎯 Usage
1. Open your browser and navigate to `http://localhost:3000/`
2. Enter text and a shift key
3. Click "Encrypt" or "Decrypt" to process the text
4. View the results instantly

---
## 🔍 Troubleshooting
### **White Screen Issue (React Not Rendering)**
1. Ensure `react` and `react-dom` versions match:
   ```sh
   npm list react react-dom
   ```
2. If mismatched, reinstall React:
   ```sh
   npm install react@latest react-dom@latest
   ```
3. Restart the server:
   ```sh
   npm start
   ```

### **Invalid Hook Call Error**
If you see `Invalid Hook Call`, follow these steps:
```sh
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm start
```

---
## 📜 License
This project is licensed under the MIT License.

## 💡 Contributing
Feel free to submit pull requests or report issues!

---
🚀 **Happy Coding!** 🎉

