#!/usr/bin/env node

const path = require('path');
const pack = require('../package.json');
const hiwari = require('../hiwari');

if (process.argv[2] === '-v') {

    console.log(pack.version);

} else {

    const filepath = process.argv[2];
    const dirPath = process.cwd();
    const completePath = path.join(dirPath, filepath);

    const log = require(completePath);

    hiwari(log);

}