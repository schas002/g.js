const VERSION = require('./package.json').version;

function cl(x) {
	console.log(x);
}

module.exports = {
	VERSION,
	VER: VERSION,
	_V: VERSION,
	cl,
	c: cl,
	o: cl,
	p: cl
};
