# bunyan-jut
[![bunyan-jut](http://img.shields.io/npm/v/bunyan-jut.svg?style=flat-square)](https://www.npmjs.com/package/bunyan-jut)
[![bunyan-jut](http://img.shields.io/npm/dm/bunyan-jut.svg?style=flat-square)](https://www.npmjs.com/package/bunyan-jut)
[![bunyan-jut](http://img.shields.io/npm/l/bunyan-jut.svg?style=flat-square)](https://www.npmjs.com/package/bunyan-jut)
[![Build Status](https://img.shields.io/travis/qualitybath/bunyan-jut.svg?style=flat-square)](https://travis-ci.org/qualitybath/bunyan-jut)
[![Coveralls](https://img.shields.io/coveralls/qualitybath/bunyan-jut.svg?style=flat-square)](https://coveralls.io/r/qualitybath/bunyan-jut)
[![code climate](https://img.shields.io/codeclimate/github/qualitybath/bunyan-jut.svg?style=flat-square)](https://codeclimate.com/github/qualitybath/bunyan-jut)

**Bunyan stream for Jut.io integration**

First install bunyan...

```
npm install bunyan
```

Then install bunyan-jut

```
npm install bunyan-jut
```

##Basic Setup

```javascript
var bunyan  = require("bunyan"),
	BunyanJut = require('bunyan-jut'),
	log;

log = bunyan.createLogger({
	name: "myApp",
	stream: new BunyanJut({
		receiver_ip: "your_receiver_ip",
		port: "receiver_listening_port"
	}),
	level: "error"
});

log.error("hello bunyan jut");
```
You can also pass an optional error handler.

```javascript
new BunyanJut({
	webhook_url: "your_webhook_url",
	channel: "your_channel",
	username: "your_username",
}, function(error){
	console.log(error);
});
```

###Defaults
bunyan-jut sets the following defaults:

* `receiver_ip` => `localhost`
* `port` => `9000`


## Authors
* [Jackson Delahunt](https://github.com/sabrehagen)

***
This library was adapted from  [bunyan-slack](https://github.com/qualitybath/bunyan-slack)

The MIT License  
Copyright (c) 2015 [stemn.com](https://www.stemn.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
