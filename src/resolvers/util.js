var rp = require('request-promise');

// Rails arrays in query strings have something like!!![]= in front of them
function railGet(key, arr) {
    return arr.map((e,i) => {
        return `${key}[]=${e}`;
    }).join("&");
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
        method: 'POST',        
        uri: uri,
        body: data,
        headers: {
            Authorization: `Bearer ${token}`
        },
        json: true // Automatically parses the JSON string in the response
    };
    return rp(opts);
}

function patch(uri, data, token) {
    const opts =  {
        method: 'PATCH',        
        uri: uri,
        body: data,
        headers: {
            Authorization: `Bearer ${token}`
        },
        json: true // Automatically parses the JSON string in the response
    };
    return rp(opts);
}

function delet(uri, data, token) {
    const opts =  {
        method: 'DELETE',        
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
    post,
    patch,
    railGet,
    delet
}