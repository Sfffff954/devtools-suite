const crypto = require('crypto');

let passwords = {};
const masterPassword = process.env.MASTER_PASSWORD; // Ensure to set this in your environment

/**
 * Encrypts a password using the master password.
 * @param {string} password - The password to encrypt.
 * @returns {string} - The encrypted password.
 */
const encryptPassword = (password) => {
    const cipher = crypto.createCipher('aes-256-cbc', masterPassword);
    let encrypted = cipher.update(password, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
};

/**
 * Decrypts a password using the master password.
 * @param {string} encryptedPassword - The encrypted password to decrypt.
 * @returns {string} - The decrypted password.
 */
const decryptPassword = (encryptedPassword) => {
    const decipher = crypto.createDecipher('aes-256-cbc', masterPassword);
    let decrypted = decipher.update(encryptedPassword, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};

/**
 * Stores a password.
 * @param {string} key - The key under which to store the password.
 * @param {string} password - The password to store.
 */
const storePassword = (key, password) => {
    passwords[key] = encryptPassword(password);
};

/**
 * Retrieves a password.
 * @param {string} key - The key under which the password is stored.
 * @returns {string|null} - The decrypted password or null if not found.
 */
const retrievePassword = (key) => {
    const encryptedPassword = passwords[key];
    return encryptedPassword ? decryptPassword(encryptedPassword) : null;
};

module.exports = { storePassword, retrievePassword };