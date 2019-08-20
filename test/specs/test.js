const assert = require('assert');

describe('Website', function () {
    it('should be alive', function () {
        

        browser.url('/')
        const img = $('img[src="http://ip-5236.sunline.net.ua:38015/images/logotype.png"]')
        assert(img.isExisting(), 'Website should be opened, and logo displayed')
        browser.pause(5000)
    })
})