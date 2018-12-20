const request = require('request');

const cheerio = require('cheerio');

request('https://harshabing.com',(error,response,html) =>{

	if(!error  && response.statusCode  ==200){
		const $ = cheerio.load(html);

		const lgheading = $('.lg-heading');

		// console.log(lgheading.html());

		// console.log(lgheading.text());

		// const output = lgheading.find('h1').text();

		// const output = lgheading.children('h1').next().text();


		// console.log(output);

		$('.lg-heading').each(i,el) =>
		{

				const title = $(el).find('lg-heading')
									.text()
									.replace(/\s\s+g,'')


		}





	}


});