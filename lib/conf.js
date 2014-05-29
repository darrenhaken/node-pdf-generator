var nconf = require('nconf');

nconf.argv()
    .env()
    .file({ file: 'config.json' })
    .defaults({
        port: 1337,
        bindIp: '127.0.0.1'
    });

module.exports = {
    port: nconf.get('port'),
    bindIp: nconf.get('bindIp')
};
