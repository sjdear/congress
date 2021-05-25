
setInterval(function() {
    const exec = require('child_process').exec;
<<<<<<< HEAD
    exec('/Users/sydneydeardorff/Desktop/congressSiteLive/quickiePush.sh', (e, stdout, stderr)=> {
=======
    exec('/home/sydney_deardorff/congress/quickiePush.sh', (e, stdout, stderr)=> {
>>>>>>> 8b1abca4292cdb77cf681d7f1f27e12a09cf3ce8
        if (e instanceof Error) {
            console.error(e);
            throw e;
        }
        console.log('stdout', stdout);
        console.log('sterr', stderr);
    });

<<<<<<< HEAD
}, 60 * 1000);
=======
}, 300 * 1000);
>>>>>>> 8b1abca4292cdb77cf681d7f1f27e12a09cf3ce8
