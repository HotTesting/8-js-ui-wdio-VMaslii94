## Modifying commands

| Command                                          |                                                             Description |                                                  Documentation |
| ------------------------------------------------ | ----------------------------------------------------------------------: | -------------------------------------------------------------: |
| browser.url('http://google.com')                 |                                        Open provided URL in browser tab |                 https://webdriver.io/docs/api/browser/url.html |
| \$('div')                                        |                                  Find and return first matching element |                   https://webdriver.io/docs/api/browser/$.html |
| \$\$('div')                                      |                          Find and return ALL matching elements as Array |                  https://webdriver.io/docs/api/browser/$$.html |
| const myElem = \$('div')                         |                                        Save found element for later use |                                                                |
| \$('div').click()                                |                                         Click in the middle of element. |               https://webdriver.io/docs/api/element/click.html |
| \$('input').setValue('Text to type')             |                                                                         |            https://webdriver.io/docs/api/element/setValue.html |
| \$('input').addValue('Text to type')             |                                                                         |            https://webdriver.io/docs/api/element/addValue.html |
| \$('input').clearValue()                         |                                                                         |          https://webdriver.io/docs/api/element/clearValue.html |
| \$('div').scrollIntoView()                       |                                                                         |      https://webdriver.io/docs/api/element/scrollIntoView.html |
| \$(selector).selectByAttribute(attribute, value) | Works with <select> element. Selects option by attribute name and value |   https://webdriver.io/docs/api/element/selectByAttribute.html |
| \$(selector).selectByIndex(index)                |          Works with <select> element. Select by option position (index) |       https://webdriver.io/docs/api/element/selectByIndex.html |
| \$(selector).selectByVisibleText(text)           |              Works with <select> element. Select by visible option text | https://webdriver.io/docs/api/element/selectByVisibleText.html |

## Element state reading commands

| Command                              |                                     Description |                                             Documentation |
| ------------------------------------ | ----------------------------------------------: | --------------------------------------------------------: |
| browser.getUrl()                     |           Returns current URL opened in browser |       https://webdriver.io/docs/api/webdriver.html#geturl |
| \$('div').getText()                  |                   Get visible text from element |        https://webdriver.io/docs/api/element/getText.html |
| \$('input').getValue()               |              Get typed text from input/textarea |   https://webdriver.io/docs/api/element/getAttribute.html |
| \$('input').isDisplayed()            |     Returns true if element visible on the page |    https://webdriver.io/docs/api/element/isDisplayed.html |
| \$('button').isExisting()            | Returns true if element exists in DOM structure |      https://webdriver.io/docs/api/element/isEnabled.html |
| \$('button').isEnabled()             |      Returns true if element state is "enabled" |      https://webdriver.io/docs/api/element/isEnabled.html |
| \$('button').isFocused()             |      Returns true if element state is "focused" |      https://webdriver.io/docs/api/element/isFocused.html |
| \$('button').isSelected()            |     Returns true if element state is "selected" |     https://webdriver.io/docs/api/element/isSelected.html |
| \$('button').getCSSProperty('color') |         Returns value of specified css property | https://webdriver.io/docs/api/element/getCSSProperty.html |
| \$('button').getAttribute('id')      |        Returns value of specified xml attribute |   https://webdriver.io/docs/api/element/getAttribute.html |

## Browser level commands

| Command                                            |                                                          Description |                                            Documentation |
| -------------------------------------------------- | -------------------------------------------------------------------: | -------------------------------------------------------: |
| browser.getCookies()                               |                           Returns all cookies visible on current URL |    https://webdriver.io/docs/api/browser/getCookies.html |
| browser.getCookies('cookieName')                   |                           Returns cookie with 'cookieName' if exists |    https://webdriver.io/docs/api/browser/getCookies.html |
| browser.setCookies([{name: 'test', value: '123'}]) |                            Set array of provided cookies to the page |    https://webdriver.io/docs/api/browser/setCookies.html |
| browser.deleteCookies()                            |                            Delete all visible cookies on current URL | https://webdriver.io/docs/api/browser/deleteCookies.html |
| browser.deleteCookies(['test3'])                   |                      Remove array of cookies (names), on current URL | https://webdriver.io/docs/api/browser/deleteCookies.html |
| browser.reloadSession()                            | Close current browser, and reopen clean browser with same parameters | https://webdriver.io/docs/api/browser/reloadSession.html |
| browser.pause(3000)                                |               Pause execution of commands. Pause time in miliseconds |         https://webdriver.io/docs/api/browser/pause.html |
| browser.setWindowSize(1920, 1080)                  |                          Resize window to specified width and height | https://webdriver.io/docs/api/browser/setWindowSize.html |
| browser.newWindow('http://google.com')             |                                           Open new tab in browser |     https://webdriver.io/docs/api/browser/newWindow.html |
| browser.switchWindow(urlOrTitleToMatch)            |                                     Switch to tab by url or title |  https://webdriver.io/docs/api/browser/switchWindow.html |


extra:
https://webdriver.io/docs/api/browser/saveScreenshot.html
browser.saveScreenshot('./screenshot.png');

https://webdriver.io/docs/api/webdriver.html#acceptalert
https://webdriver.io/docs/api/webdriver.html#dismissalert
https://webdriver.io/docs/api/webdriver.html#getalerttext
