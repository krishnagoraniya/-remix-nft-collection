import 'dotenv/config.js';
const { WEB3STORAGE_TOKEN } = process.env;

module.exports = ['./demo.js', WEB3STORAGE_TOKEN];
