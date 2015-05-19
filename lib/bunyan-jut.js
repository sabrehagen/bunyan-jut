var util = require('util'),
request  = require('request');

function BunyanJut(options) {
    options = options || {};

    this.receiver_ip   = options.receiver_ip   || 'localhost';
    this.receiver_port = options.receiver_port || 9000;
    this.error         = options.error         || function(){};
}

BunyanJut.prototype.write = function write(record) {

// have never actually used bunyan so don't know if
// this is a possible input from their library
//	if (typeof record === "string"){
//		record = JSON.parse(record);
//	}

    var self = this;
    request.post({
        url: util.format('http://%s:%s/%s', this.receiver_ip, this.receiver_port, 'events'),
        body: record,
        headers : {
            'Content-Type': 'application/json'
        }
	})
	.on('error', function(err) {
        return self.error(err);
    });
};

module.exports = BunyanJut;