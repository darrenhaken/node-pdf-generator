var http = require('http'),
    htmlToPdf = require('wkhtmltopdf');

http
    .createServer(acceptHtmlAndProvidePdf)
    .listen(1337, '127.0.0.1');

function acceptHtmlAndProvidePdf(request, response) {
    request.addListener("data", function (chunk) {
        request.content += chunk;
    });

    request.addListener("end", function () {
        response.writeHead(200, {'Content-Type': 'application/pdf'});
        htmlToPdf(request.content).pipe(response);
    });
}

console.log('Server running at http://127.0.0.1:1337/');

