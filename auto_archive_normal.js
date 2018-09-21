var webpage = require('webpage');
var currentDate = new Date();
var page = webpage.create();

page.scrollPosition = {
  top: 1000,
  left: -3000
};

page.open('https://www.bbc.co.uk', function(status) {
    console.log(page['objectName']);
    console.log(page['title']);
    console.log(page['url']);


console.log("Status: " + status);
if(status === "success") {
    page.render(currentDate + ' bbccouk_noTimeout.png', {format: 'png', quality: '100'});
}
phantom.exit();

});
