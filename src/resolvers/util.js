var rp = require('request-promise');

// Rails arrays in query strings have something like!!![]= in front of them
function railThatArray() {
    
}



function get(uri, data, token) {
    const opts =  {
        uri: uri,
        qs: data,
        headers: {
            Authorization: `Bearer ${token}`
        },
        json: true // Automatically parses the JSON string in the response
    };

    return rp(opts);
}

function post(uri, data, token) {
    const opts =  {
        uri: uri,
        body: data,
        headers: {
            Authorization: `Bearer ${token}`
        },
        json: true // Automatically parses the JSON string in the response
    };
    return rp(opts);
}
export {
    get,
    post
}