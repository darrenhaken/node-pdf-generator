var http = require('http'),
    htmlToPdf = require('wkhtmltopdf'),
    conf = require('./lib/conf.js')

http
    .createServer(acceptHtmlAndProvidePdf)
    .listen(conf.port, conf.bindIp);

function acceptHtmlAndProvidePdf(request, response) {
    console.log('Request received: ' + request);

    request.content = '';

    request.addListener("data", function (chunk) {
        if (chunk) {
            request.content += chunk;
        }
    });

    request.addListener("end", function () {
        response.writeHead(200, { 'Content-Type': 'application/pdf' });

        htmlToPdf(request.content)
            .pipe(response);

        console.log('Processed HTML to PDF: ' + response);
    });
}

console.log('Server running at http://' + conf.bindIp + ':' + conf.port + '/');
