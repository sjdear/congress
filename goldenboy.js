const puppeteer = require('puppeteer');

setInterval(function() {

  async function houseStatus(url) {
    const browser = await puppeteer.launch({args: ['--no-sandbox']});
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="content"]/div[2]/div/div[1]/div[1]/div[1]/div/div[1]/div[1]/h4/a[1]');
    const txt = await el.getProperty('textContent');
    const rawTxtHouse = await txt.jsonValue();

    if (rawTxtHouse == 'Not in Session') {
      var fs = require('fs')
      fs.readFile('index.html', 'utf8', function (err,data) {
      
        var formatted = data.replace(/sure is/g, 'totally isnt');
      
       fs.writeFile('index.html', formatted, 'utf8', function (err) {
          if (err) return console.log(err);
       });
      });
    } else {
      var fs = require('fs')
      fs.readFile('index.html', 'utf8', function (err,data) {
      
        var formatted = data.replace(/totally isnt/g, 'sure is');
      
       fs.writeFile('index.html', formatted, 'utf8', function (err) {
          if (err) return console.log(err);
       });
      });
    };

    browser.close();
}

houseStatus('https://www.congress.gov/')


async function senateStatus(url) {
  const browser = await puppeteer.launch({args: ['--no-sandbox']});
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x('//*[@id="content"]/div[2]/div/div[1]/div[1]/div[1]/div/div[2]/div[1]/h4/a[1]');
  const txt = await el.getProperty('textContent');
  const rawTxtSenate = await txt.jsonValue();

  if (rawTxtSenate == 'Not in Session') {
    var fs = require('fs')
    fs.readFile('index.html', 'utf8', function (err,data) {
    
      var formatted = data.replace(/definitely is/g, 'sure aint');
    
     fs.writeFile('index.html', formatted, 'utf8', function (err) {
        if (err) return console.log(err);
     });
    });
  } else {
    var fs = require('fs')
    fs.readFile('index.html', 'utf8', function (err,data) {
    
      var formatted = data.replace(/sure aint/g, 'definitely is');
    
     fs.writeFile('index.html', formatted, 'utf8', function (err) {
        if (err) return console.log(err);
     });
    });
  };

  browser.close();
}

senateStatus('https://www.congress.gov/')

},300 * 1000); 



