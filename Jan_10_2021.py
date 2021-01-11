import requests, schedule, time
from bs4 import BeautifulSoup

headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '3600',
    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:52.0) Gecko/20100101 Firefox/52.0'
    }
 
url = "https://www.congress.gov/"
req = requests.get(url, headers)
soup = BeautifulSoup(req.content, 'html.parser')
resultHouse = soup.find_all(lambda tag: tag.name == 'div' and 
                                   tag.get('class') == ['home-current-house'])
resultSenate = soup.find_all(lambda tag: tag.name == 'div' and 
                                   tag.get('class') == ['home-current-senate'])
houseString = str(resultHouse)
senateString = str(resultSenate)

if 'outOfSession' in houseString and 'outOfSession' in senateString:
    print ('No, Neither in Session')
if 'inSession' in houseString and 'outOfSession' in senateString:
    print ('Yes, House is in Session, but Senate is not')
if 'outOfSession' in houseString and 'inSession' in senateString:
    print ('Yes, Senate is in Session, but House is not')
if 'inSession' in houseString and 'inSession' in senateString:
    print ('Yes, Both in Session')
