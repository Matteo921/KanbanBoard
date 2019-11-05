var os = require('os');
var colors = require('colors');
var OSTime = require('./modules/OSTime');

function getWindowsinfo() {
    var type = os.type(); 
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;  
    var userInfo = os.userInfo();
    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU model:', cpu);
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
    OSTime.print();

}

exports.print = getOSinfo;