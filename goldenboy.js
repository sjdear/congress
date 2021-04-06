const puppeteer = require('puppeteer');

setInterval(function() {

  async function houseStatus(url) {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="content"]/div[2]/div/div[1]/div[1]/div[1]/div/div[1]/div[1]/h4/a[1]');
    const txt = await el.getProperty('textContent');
    const rawTxtHouse = await txt.jsonValue();

    if (rawTxtHouse == 'Not in Session') {
      var fs = require('fs')
      fs.readFile('index.html', 'utf8', function (err,data) {
      
        var formatted = data.replace(/totally is/g, 'isnt');
      
       fs.writeFile('index.html', formatted, 'utf8', function (err) {
          if (err) return console.log(err);
       });
      });
    } else {
      var fs = require('fs')
      fs.readFile('index.html', 'utf8', function (err,data) {
      
        var formatted = data.replace(/isnt/g, 'totally is');
      
       fs.writeFile('index.html', formatted, 'utf8', function (err) {
          if (err) return console.log(err);
       });
      });
    };

    browser.close();
}

houseStatus('https://www.congress.gov/')


async function senateStatus(url) {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x('//*[@id="content"]/div[2]/div/div[1]/div[1]/div[1]/div/div[2]/div[1]/h4/a[1]');
  const txt = await el.getProperty('textContent');
  const rawTxtSenate = await txt.jsonValue();

  if (rawTxtSenate == 'Not in Session') {
    var fs = require('fs')
    fs.readFile('index.html', 'utf8', function (err,data) {
    
      var formatted = data.replace(/sure is/g, 'unfortunately is not');
    
     fs.writeFile('index.html', formatted, 'utf8', function (err) {
        if (err) return console.log(err);
     });
    });
  } else {
    var fs = require('fs')
    fs.readFile('index.html', 'utf8', function (err,data) {
    
      var formatted = data.replace(/unfortunately is not/g, 'sure is');
    
     fs.writeFile('index.html', formatted, 'utf8', function (err) {
        if (err) return console.log(err);
     });
    });
  };

  browser.close();
}

senateStatus('https://www.congress.gov/')

}, 20 * 1000); 



