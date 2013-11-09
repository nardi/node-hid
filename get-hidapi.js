var exists = require('fs').existsSync,
    cd = process.chdir,
    exec = require('child_process').exec;

if (exists('hidapi')) {
    cd('hidapi');
    exec('git pull');
} else {
    exec('git clone http://github.com/signal11/hidapi');
}