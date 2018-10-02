const process = require('child_process').fork(require('path').join(__dirname, 'src', 'test_process.js'), {env:{TESTING:true}});
process.once('message', msg => console.log(msg));