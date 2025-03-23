from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend requests

def caesar_cipher(text, shift, decrypt=False):
    if decrypt:
        shift = -shift
    result = ""
    for char in text:
        if char.isalpha():
            shift_amount = 65 if char.isupper() else 97
            result += chr((ord(char) - shift_amount + shift) % 26 + shift_amount)
        else:
            result += char
    return result

@app.route('/encrypt', methods=['POST'])
def encrypt():
    try:
        data = request.json
        plaintext = data.get('plaintext', '')
        key = int(data.get('key', 0))

        if not plaintext or not isinstance(key, int):
            return jsonify({"error": "Invalid input"}), 400

        ciphertext = caesar_cipher(plaintext, key)
        return jsonify({"ciphertext": ciphertext})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/decrypt', methods=['POST'])
def decrypt():
    try:
        data = request.json
        ciphertext = data.get('ciphertext', '')
        key = int(data.get('key', 0))

        if not ciphertext or not isinstance(key, int):
            return jsonify({"error": "Invalid input"}), 400

        plaintext = caesar_cipher(ciphertext, key, decrypt=True)
        return jsonify({"plaintext": plaintext})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
