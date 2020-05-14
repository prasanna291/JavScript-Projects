// Include http ,url module.
var http = require('http');
var url = require('url');
var queryString = require('querystring');


// This function is used to verify username and password and return related message back to client.
function verifyUserAccount(userName, password, resp, reqMethod){
    // Create an empty JSON object to return.
    var retJson = {};

    retJson.reqMethod = reqMethod;

    var message = '';

    retJson.userName = userName;

    retJson.password = password;

    if('jerry' == userName && '666666' == password)
    {
        message = 'User name and password is correct. ';
    }else if(''==userName && ''==password){
        message = 'User name and password can not be empty. ';
    }else {
        message = 'User name and password is not correct. ';
    }

    // Set return message.
    retJson.message = message;

    /* Set Access-Control-Allow-Origin http header will fix No 'Access-Control-Allow-Origin' header is present on the requested resource error
       when use XMLHttpRequest object to get this server page via ajax method. */
    resp.writeHead(200, {'Access-Control-Allow-Origin':'*'});

    resp.end(JSON.stringify(retJson));
}

// Create http server.
var httpServer = http.createServer(function (req, resp) {

    // Get request method.
    var method = req.method;

    // If post.
    if("POST" == method)
    {
        var postData = '';

        // Get all post data when receive data event.
        req.on('data', function (chunk) {
            postData += chunk;
        });

        // When all request post data has been received.
        req.on('end', function () {

            console.log("Client post data : " + postData);

            var postDataObject = null;

            try
            {
                // Parse the post data and get client sent username and password.
                postDataObject = JSON.parse(postData);
            }catch(error)
            {
                // Parse data from query string.
                postDataObject = queryString.parse(postData);
            }

            userName = postDataObject.user_name;

            password = postDataObject.password;

            verifyUserAccount(userName, password, resp, method);
        })
    }else if("GET" == method)
    {
        // Get and parse client request url.
        var reqUrlString = req.url;

        var urlObject = url.parse(reqUrlString, true, false);

        // Get user name and password.
        var userName = urlObject.query.user_name;

        var password = urlObject.query.password;

        verifyUserAccount(userName, password, resp, method);
    }


});

// Http server listen on port 8888.
httpServer.listen(8888);

console.log("Http server is started and listen on port 8888.");