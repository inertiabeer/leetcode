var obj={};
var i=0;
var encode = function(longUrl) {
    obj[i]=longUrl;

    return ("http://tinyurl.com/"+i++);

};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    var index=shortUrl.split("tinyurl.com/")[1];
    return obj[index];

};