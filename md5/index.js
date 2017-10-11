const crypto = require('crypto');

function cryptPwd(password) {
    password = password + '';
    let md5 = crypto.createHash('md5');
    return md5.update(password).digest('hex');
}

console.log(cryptPwd(123456));
