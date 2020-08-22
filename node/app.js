const { say, sha256 } = require('../pkg/ssvm_nodejs_starter_lib.js');

const http = require('http');
const url = require('url');
const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    if (queryObject['name']) {
        res.end(say(queryObject['name']) + '\n');
    } else if (req.method == 'POST') {
        let body = []
        req.on('data', function (chunk) {
            body.push(chunk);
        });
        req.on('end', function () {
            let buf = Buffer.concat(body);
            let digest = sha256(Uint8Array.from(buf));
            let hex = Buffer.from(digest).toString('hex');
            console.log('Hash value: ' + hex);
            res.end(hex);
        });
    } else {
        res.end(`Please use command curl http://${hostname}:${port}/?name=MyName \n`);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
