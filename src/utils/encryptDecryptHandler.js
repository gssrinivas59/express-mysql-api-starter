var CryptoJS = require("crypto-js");

module.exports = {
    encryptObject: (playload) => {
        const playloadObj = {...playload, env_mode: process.env.NODE_ENV};
        return CryptoJS.AES.encrypt(JSON.stringify(playloadObj), process.env.ENCRYPTION_KEY).toString();
    },
    decryptObject: (token) => {
        var bytes  = CryptoJS.AES.decrypt(token, process.env.ENCRYPTION_KEY);
        var decrypt = bytes.toString(CryptoJS.enc.Utf8);

        return JSON.parse(decrypt);
    },
    encryptString: (playload) => {
        return CryptoJS.AES.encrypt(playload, process.env.ENCRYPTION_KEY).toString();
    },
    decryptString: (token) => {
        var bytes  = CryptoJS.AES.decrypt(token, process.env.ENCRYPTION_KEY);
        return bytes.toString(CryptoJS.enc.Utf8);
    },
}