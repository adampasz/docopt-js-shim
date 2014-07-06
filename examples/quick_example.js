doc = function() {
/*!	
Usage:
  quick_example.js tcp <host> <port> [--timeout=<seconds>]
  quick_example.js serial <port> [--baud=9600] [--timeout=<seconds>]
  quick_example.js -h | --help | --version
*/
}

var docopt = require ('../../docopt-js-shim');

console.log(docopt.fromComment(doc));
