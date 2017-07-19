'use strict'

const id = require('./cseId.js');
const key = require('./gKey.js');
const request = require('request');

function get(movieTitle) {
  var searchableTitle = movieTitle.split(' ').join('+');
  //console.log('title: ' + searchableTitle);

  var myUrl = 'https://www.googleapis.com/customsearch/v1?key=' + key.name + '&cx=' + id.name + '&q=' + searchableTitle;
  //console.log(myUrl);

  request(myUrl, function (error, response, body) {
    //console.log('error:', error); // Print the error if one occurred 
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    //console.log('body:', body);
    var unstringyData = JSON.parse(body);
    for (var i = 0; i < 100; i ++) {
      if (unstringyData.items[i].displayLink === 'www.imdb.com') {
        console.log(unstringyData.items[i].title + ': ' + unstringyData.items[i].snippet);
        //console.log(unstringyData.items[i].displayLink);
        return;
      }
    }
});

}

module.exports = get;