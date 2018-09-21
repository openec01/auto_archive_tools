const webshot = require('webshot');

const now = new Date ();

var options = {
  screenSize: {
    width: 920
  , height: 480
  }
, shotSize: {
    width: 1000
  , height: 'all'
  }
, userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'

        /*'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.1.2 Safari/603.3.8)'*/

       /*'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)'
    + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'*/
};

webshot('https://bbc.co.uk/news', now + ' ' +'bbcnews.png',options, function(err) {
  // screenshot now saved to bbcnews.png

});
