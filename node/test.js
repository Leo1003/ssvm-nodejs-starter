const { say, sha256 } = require('../pkg/ssvm_nodejs_starter_lib.js');
console.log( say("Node.js") );
let data = new Uint8Array(32);
let digest = sha256(data);
console.log(digest);
