const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
const crypto = require('crypto');

const promiseRL = (info) => {
    return new Promise((resolve, reject) => {
        rl.question(info, (data) => {
            resolve(data);
        });
    })
};

function cryptPwd(password) {
    password = password + '';
    let md5 = crypto.createHash('md5');
    return md5.update(password).digest('hex');
}

let getStr = () => {
    promiseRL(`输入你想要加密的字符串 \r\n`).then((str) => {
        console.log(cryptPwd(str));
        getStr();
    })
};

getStr();
