const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, '../logs/app.log');

module.exports = {
  log: (message) => {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp}: ${message}\n`;
    
    fs.appendFile(logFile, logMessage, (err) => {
      if (err) console.error('Failed to write to log file:', err);
    });
    
    console.log(message);
  },
  error: (message) => {
    const timestamp = new Date().toISOString();
    const errorMessage = `${timestamp} ERROR: ${message}\n`;
    
    fs.appendFile(logFile, errorMessage, (err) => {
      if (err) console.error('Failed to write to log file:', err);
    });
    
    console.error(message);
  }
};
