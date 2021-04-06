
setInterval(function() {
    const exec = require('child_process').exec;
    exec('/Users/sydneydeardorff/Desktop/congressSiteLive/quickiePush.sh', (e, stdout, stderr)=> {
        if (e instanceof Error) {
            console.error(e);
            throw e;
        }
        console.log('stdout', stdout);
        console.log('sterr', stderr);
    });

}, 600 * 1000);
