const crypto = require('crypto');
const secret = 'abcdefg';
const hash=crypto.createHmac("sha256",secret).digest("hex");
console.log(hash)