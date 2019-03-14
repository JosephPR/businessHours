var http   = require('http');
    moment = require('moment');


function serverCallback(req, res) {
var begin_time = moment('10:00', 'HH:mm');
var end_time = moment('18:00', 'HH:mm');

var message = 'Hello' + '!\n'
message += 'Welcome to our page. \n'
message += 'It is ' + moment().format('LTS') + '.\n';
message += 'Our business hours are from ' + begin_time.format('LTS') + ' to ' + end_time.format('LTS') + '.\n';

var begin_difference = begin_time.diff(moment(), 'minutes');
var end_difference = moment().diff(end_time, 'minutes');

if(begin_difference > 0){
message += 'Please come back in ' + begin_difference + ' minutes.\n';
}
if (end_difference > 0){ 
    message += 'Please come back tommorrow. \n';

}

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(message);
}

http.createServer(serverCallback).listen(8080);

