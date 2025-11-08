
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '../config/config.json');

module.exports = {
  getConfig: () => {
    const raw = fs.readFileSync(configPath);
    return JSON.parse(raw);
  },
  getConfigPath: () => {
    return configPath;
  },
  isValidEmail: (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  },
  isValidMobileNumber: (mobile) => {
    const regex = /^\d{10}$/;
    return regex.test(String(mobile).trim());
  },
  generateOTP: (size) => {
    let digits = '0123456789';
    let OTP = '';
    let len = digits.length
    for (let i = 0; i < size; i++) {
        OTP += digits[Math.floor(Math.random() * len)];
    }
    return OTP;
  },
  secondsToTime: (secs) => {
      var hours = Math.floor(secs / (60 * 60));

      var divisor_for_minutes = secs % (60 * 60);
      var minutes = Math.floor(divisor_for_minutes / 60);

      var divisor_for_seconds = divisor_for_minutes % 60;
      var seconds = Math.ceil(divisor_for_seconds);

      var obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
      };
      return obj;
  },
  capitalizeWords: (str) => {
    if (typeof str !== 'string') return '';
    return str
      .trim()
      .toLowerCase()
      .split(' ')
      .filter(word => word.length > 0)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  },    
  toLowerCaseString: (str) => {
    if (typeof str !== "string") return "";
    return str.trim().toLowerCase();
  },
  getIpAddress: (req) => {
    const ip =
      req.headers['x-forwarded-for']?.split(',')[0]?.trim() || // behind proxy
      req.connection?.remoteAddress ||
      req.socket?.remoteAddress ||
      req.connection?.socket?.remoteAddress ||
      req.ip ||
      null;
  
    let cleanIp = ip?.replace(/^::ffff:/, '') || null;
  
    // Convert IPv6 localhost to IPv4 localhost
    if (cleanIp === '::1') cleanIp = '127.0.0.1';
  
    return cleanIp;
  },
  formatBytes: (bytes) => {
      if(bytes === 0 || bytes === null) return '0 B';
      const k = 1024;
      const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  },
  genrateOrderNumberById: async (id) => {
    const prefix = 'GO';
    const randomPart = String(Math.floor(1000000 + Math.random() * 9000000));
    const now = new Date();
    const year = String(now.getFullYear()).slice(-2); 
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0'); 
    //const datePart = String(`${year}${month}${day}`).split('').sort(() => Math.random() - 0.5).join('');
    const datePart = `${year}${month}${day}`;
    const idPad = String(id).padStart(7, '0');
    return `${prefix}-${datePart}-${idPad}`;
  },
  genratePaymentNumber: async () => {
    const prefix = 'GP';
    const now = new Date();
    const year = String(now.getFullYear()).slice(-2); 
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0'); 
    const datePart = `${year}${month}${day}`; 
    const hours = String(now.getHours()).padStart(2, '0'); 
    const minutes = String(now.getMinutes()).padStart(2, '0'); 
    const seconds = String(now.getSeconds()).padStart(2, '0'); 
    const msPart = String(now.getMilliseconds()).padStart(3, '0').slice(0, 2);
    const timePart = `${hours}${minutes}${seconds}${msPart}`;
    const randomPart = String(Math.floor(100000 + Math.random() * 900000));
    return `${prefix}${datePart}${timePart}${randomPart}`;
  },
  genrateRefundNumber: async () => {
    const prefix = 'GR';
    const now = new Date();
    const year = String(now.getFullYear()).slice(-2); 
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0'); 
    const datePart = `${year}${month}${day}`;
    const hours = String(now.getHours()).padStart(2, '0'); 
    const minutes = String(now.getMinutes()).padStart(2, '0'); 
    const seconds = String(now.getSeconds()).padStart(2, '0'); 
    const msPart = String(now.getMilliseconds()).padStart(3, '0').slice(0, 2);
    const timePart = `${hours}${minutes}${seconds}${msPart}`;
    const randomPart = String(Math.floor(100000 + Math.random() * 900000));
    return `${prefix}${randomPart}${datePart}${timePart}`;
  },
}