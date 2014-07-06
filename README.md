docopt-js-shim
==============

Shim for [docopt.coffee](https://github.com/stuartcarnie/docopt.coffee) to make it easier to useit from JavaScript instaed of CoffeeScript.  

*  Adds helper method .fromComment, so the first /* comment in a function can be used as a python-style docstrings.

Please refer to [the original docs](http://docopt.org/) for more info.

Usage 
---------

```
npm install --save-dev git+https://github.com/adampasz/docopt-js-shim.git
```

Here's the quick_example.coffee ported to the js-shim:

```
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
```

Doc Strings
----------
Cavieat: Comments will probably be removed by minification.  If you need to minify your code, use docopt.fromString() instead.

