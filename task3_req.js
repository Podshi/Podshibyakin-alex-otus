const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();

const method = 'GET';
const URL = 'http://localhost:3000/';
let countReq = 1;
let isAsinc = false;

for (let i = 2; i < process.argv.length; i++){
    if (process.argv[i].toLowerCase === 'asinc') {
        console.log('asinc');
        isAsinc = true;
    };
    if (process.argv[i] > 0) {
        console.log('countReq = ' + process.argv[i]);
        countReq = process.argv[i];
    };
}

for (let i = 1; i <= countReq; i++){
    console.log('запрос № ' + i);
    
    xhr.open(method, URL, isAsinc);
    xhr.send('');
}
console.log('выход');