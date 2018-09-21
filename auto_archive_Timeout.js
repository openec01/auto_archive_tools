var page = require('webpage').create();
var currentDate = new Date();
page.settings.userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"
page.viewportSize = {width: 1280, height: 1024};

/*page.scrollPosition = {
  top: 1000,
  left: -3000
};
*/

/*function pageRender () {
page.render(currentDate + 'bbc.png', {format: 'png', quality: '100'});
}
*/

page.open("https://bbc.co.uk/", function(status) {
    if (status !== "success") {
        console.log("Unable to load!");
        phantom.exit();
    } else {
        window.setTimeout(function () {
            page.render(currentDate + ' bbccouk_Timeout.png', {format: 'png', quality: '100'});
            phantom.exit();
        }, 10000);
    }
});
