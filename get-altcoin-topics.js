var fetch = require('node-fetch');
var cheerio = require('cheerio');

var threads = [];
debugger;
var rows; var page; var table;
for( var k = 0 ; k < 1 ; k++){
	var url = 'https://bitcointalk.org/index.php?board=67.' + 40*k;
	console.log("fetching newest altcoin topics...");
	fetch(url)
	.catch( (err) => err )
	.then( (res) => {
		return res.text();
	})
	.catch( (err) => err)
	.then( (res) => {
		var $ = cheerio.load(res);
		var windowbg = $('.windowbg');

		for(var i = 0 ; i < windowbg.length ; i+=15){
			var threadTitle = $('.windowbg')[i].children[1].children[0].children[0].data;
			console.log(threadTitle);
		}
	});
}














