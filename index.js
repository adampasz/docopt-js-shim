var lib = require('docopt/docopt.js');


function extractFirstComment(f) {
  var comment = f.toString();
  var s = '';

  if (comment = comment.match(/\/\*[!*]([\s\S]*?)\*\//))
    s = comment[1];

  return s;

}

function fromComment(f) {
  return fromString(extractFirstComment(f));
}

function fromString(s) {
  return lib.docopt(s);
}

module.exports.fromString = fromString;
module.exports.fromComment = fromComment;

