const Http = require('http');
const Url = require('url').URL;
console.log("got here");

function startServer() {
    const serverHost = "http://localhost",
          serverPort = 8888;
    let myServer;

    myServer = Http.createServer(queryReceived).listen(serverPort);
    console.log(`Server started at ${serverHost} and port ${serverPort}`);

        function queryReceived(request, response) {
            let myQuery = request.url;
            console.log(`The query is : ${myQuery}`);
            response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
            response.write(
                `
            <!DOCTYPE html>
            <html lang='en'>
              <head>
                <meta charset='UTF-8'>
                <title>Node.JS</title>
              </head>
              <body>
                <h1>LRead the Query</h1>
                <p>La requête complète est : </p>
                <ul>
                    <li>La page complète :</li>
                    <li>La Query String :</li>
                    <li>Le chemin :</li>
                    <li>Le port :</li>
                    <li>Le hostname :</li>
                </ul>
              </body>
            </html>
            `
            );
            response.end();
        }

}
        exports.startServer = startServer;
