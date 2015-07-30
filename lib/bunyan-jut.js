var util = require('util');
var request = require('request');

function BunyanJut(options) {
    options = options || {};

    this.receiver_ip   = options.receiver_ip   || 'localhost';
    this.receiver_port = options.receiver_port || 9000;
    this.error         = options.error         || function(){};
}

BunyanJut.prototype.write = function write(record) {

	if (typeof record === 'string'){
		record = JSON.parse(record);
	}

    var nameFromLevel = {
        10: 'trace',
        20: 'debug',
        30: 'info',
        40: 'warn',
        50: 'error',
        60: 'fatal'
    };

    // convert the numeric level to a readable level
    record.level = nameFromLevel[record.level] || record.level;

    var self = this;
    request.post({
        url: util.format('http://%s:%s/?type=event', this.receiver_ip, this.receiver_port),
        json: record,
        headers : {
            'Content-Type': 'application/json'
        }
    }).on('error', function(err) {
        return self.error(err);
    });
};

module.exports = BunyanJut;
