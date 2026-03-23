// This is the index.js file for the password manager

const fs = require('fs');
const crypto = require('crypto');

// Utility to encrypt and decrypt the passwords
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); // Should be stored securely
const iv = crypto.randomBytes(16); // Initialization vector

function encrypt(text) {
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return iv.toString('hex') + ':' + encrypted;
}

function decrypt(text) {
    const textParts = text.split(':');
    const iv = Buffer.from(textParts.shift(), 'hex');
    const encryptedText = Buffer.from(textParts.join(':'), 'hex');
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Save password to a local encrypted file
function savePassword(service, password) {
    const encryptedPassword = encrypt(password);
    fs.writeFileSync(`${service}-password.txt`, encryptedPassword);
}

// User-friendly setup instructions
console.log('Setup Instructions:');
console.log('1. Ensure you have Node.js installed on your computer.');
console.log('2. Run `npm install crypto` to install the crypto library.');
console.log('3. Use `node index.js` to run this script.');
console.log('4. Call savePassword(service, password) to save an encrypted password.');

// Example usage
// savePassword('example_service', 'your_password_here');
