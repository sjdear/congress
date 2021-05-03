
setInterval(function() {
    const exec = require('child_process').exec;
    exec('/home/sydney_deardorff/congress/congress/quickiePush.sh', (e, stdout, stderr)=> {
        if (e instanceof Error) {
            console.error(e);
            throw e;
        }
        console.log('stdout', stdout);
        console.log('sterr', stderr);
    });

}, 300 * 1000);
