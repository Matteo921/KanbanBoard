var os = require('os');

function getOSTime() {
    var uptime = os.uptime();
    var time = (uptime / 60).toFixed(0);
    var timeSec = (uptime % 60).toFixed(0);

    if (time > 60) {
        var hours = (uptime / 3600).toFixed(0);
        if (hours === 1) {
            console.log(hours + 'hour' + time + 'min' + timeSec + 'sec')
        } else {
            console.log(hours + 'hours' + time + 'min' + timeSec + 'sec')
        }
    }
    else {
        console.log(time + 'min' + timeSec + 'sec');
    }
}

exports.print = getOSTime;