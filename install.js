var exists = require('fs').existsSync,
    exec = require('child_process').exec;

if (exists('build')) exec('node-gyp clean');
exec('node-gyp configure build install');