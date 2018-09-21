const webshot = require('webshot');

const now = new Date (); 
 
    webshot('https://www.bbc.co.uk/', now + ' ' +'bbccouk.png', 
    function(err) {
    if (!err) {
        console.log('Most recent screenshot of bbc.co.uk Landing page taken on ' +  now);
    
    }
});

