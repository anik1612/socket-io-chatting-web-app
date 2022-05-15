const promiseResolver = require('../middlewares/promiseResolver');
const path = require('path');

console.log(path.resolve());

exports.home = promiseResolver(async (req, res) => {
	res.sendFile(path.resolve() + '/views/index.html');
});
