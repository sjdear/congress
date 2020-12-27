import bs4, requests, smtplib

toAddress = ['sydney.deardorff@gmail.com', 'sdear@ucla.edu']

# Download page
getPage = requests.get('https://www.congress.gov/')
getPage.raise_for_status()

# Parse text for status
session = bs4.BeautifulSoup(getPage.text, 'html.parser')
statusSession = session.select('.status senate')

current_status = 'Not in Session'
slength = (len(current_status))
inSession = False

for status in statusSession:
           for i in range(len(status.text)):
               chunk = status.text[i:i+slength].lower()
               if chunk == current_status:
                   inSession = True
           
if inSession == False:
           conn = smtplib.SMTP('smtp.gmail.com', 587)
           conn.ehlo()
           conn.starttls()
           conn.login('sydney.deardorff@gmail.com', 'xefhovzpsujoezhz')
           conn.sendmail('sydney.deardorff@gmail.com', toAddress, 'Subject: Congress test!\n\nAttention!\n\nCongress is NOT in session!\n\n:)\n')
           conn.quit()
           print('Sent notificaton e-mails for the following recipients:\n')
           for i in range(len(toAddress)):
                print(toAddress[i])
           print('')
else:
           print('Congress is in session right now')


