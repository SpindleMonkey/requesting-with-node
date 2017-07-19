'use strict'

// get custom search engine key and google api key
const id = require('./cseId.js');
const key = require('./gKey.js');

// include the node request librry
const request = require('request');

// get search results for the specified movie
function get(movieTitle) {
  // convert spaces to '+' for the search
  var searchableTitle = movieTitle.split(' ').join('+');
  //console.log('title: ' + searchableTitle);

  // build the search URL, with id, key, and movie title
  var myUrl = 'https://www.googleapis.com/customsearch/v1?key=' + key.name + '&cx=' + id.name + '&q=' + searchableTitle;
  //console.log(myUrl);

  // request search results for myUrl
  request(myUrl, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred 
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    //console.log('body:', body);

    // need to parse the returned data so we can access it with dot notation
    var unstringyData = JSON.parse(body);

    // look in the first 10 results for an IMDB URL
    for (var i = 0; i < 10; i ++) {
      if (unstringyData.items[i].displayLink === 'www.imdb.com') {
        console.log(unstringyData.items[i].title + ': ' + unstringyData.items[i].snippet);
        //console.log(unstringyData.items[i].displayLink);
        return;
      }
    }
});

}

module.exports = get;