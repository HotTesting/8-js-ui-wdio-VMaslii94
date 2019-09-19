//const assert = require('assert');
/**
 - Try to implement as much tests as you can
 - Do not overload tests with logic, be simple
 - browser.pause() allowed
 - copy/paste is allowed
 - prefer css selectors
 */



// Each implemented test gives you 15 points (max total - 45)
describe("Items search", function() {
    
    it("should show results in case multiple items matches", function() {
     browser.url('/');
      const searchField = $('.form-control[name="query"]')
      searchField.setValue('duck');
      searchField.addValue("Enter");
    browser.pause(3000)
     
     // throw new Error("NOT IMPLEMENTED");
    });
  
    it("should redirect to item page in case only one result matches", function() {
      const searchField = $('.form-control[name="query"]')
      searchField.setValue('12340003');
      searchField.addValue("Enter");
      let currentURL=browser.getUrl();

      assert.equal(currentURL,"http://ip-5236.sunline.net.ua:38015/rubber-ducks-c-1/red-duck-p-3","Another URL.Need to check")

      browser.pause(3000) 
      //throw new Error("NOT IMPLEMENTED");
    });
  
    it("should redirect to 'no matching results' in case no items matched", function() {
     const searchField = $('.form-control[name="query"]')
      searchField.setValue('ducks');
      searchField.addValue("Enter");

    
      
    let  displayedMessage = $('#box-search-results div');
    assert(displayedMessage.isDisplayed());
      const text = displayedMessage.getText()
      console.log('Message: ', text)
      assert(text.includes('No matching results'), 'No results')
      browser.pause(3000) 
      //throw new Error("NOT IMPLEMENTED");
    });
  });
  
 // Each implemented test gives you 20 points (max total - 40)
  describe("Search results sorting", function() {
    it("correctly arranges items when using 'by price' sorting", function() {
      browser.url('/');
      const searchField = $('.form-control[name="query"]')
      searchField.setValue('duck');
      searchField.addValue("Enter");
      
     let sortPriceButton= $('btn btn-default,[href="http://ip-5236.sunline.net.ua:38015/search?query=duck&page=1&sort=price"]');
      sortPriceButton.click();     
      
      let elementsArray = $$(".col-xs-6.col-sm-4.col-md-3");
     
      let priceResults= [];
   
      let mapper = elementsArray.map(function (element){
              let price = element.$('.product').getAttribute('data-price');
        priceResults.push(price);
                return price;
                })
     // console.log(mapper+"Elements from DOM")    
      let sortedArray = priceResults.sort()
      
      // for (const key in sortedArray) {
      //   const element = sorterArray[key];
      //   console.log(element);  
      //    }
      

      let compareArrays = JSON.stringify(mapper) == JSON.stringify(sortedArray);
      // if (JSON.stringify(mapper) == JSON.stringify(sortedArray))
      //   console.log("True");
      // else
      //   console.log("False");

      assert.equal(compareArrays,true)

      browser.pause(3000);
      
      //  throw new Error("NOT IMPLEMENTED");
    });
 
    it("correctly arranges items when using 'by name' sorting", function() {
      browser.url('/');
      const searchField = $('.form-control[name="query"]')
      searchField.setValue('duck');
      searchField.addValue("Enter");
      
      //Sort by names button
      let sortNamesButton=$('btn btn-default,[href="http://ip-5236.sunline.net.ua:38015/search?query=duck&page=1&sort=name"]');     
      sortNamesButton.click();

      let elementsArray = $$(".col-xs-6.col-sm-4.col-md-3");

      let namesArray= [];

      let mapper = elementsArray.map(function (element){
              let name = element.$('.product').getAttribute('data-name');
              namesArray.push(name);
              // console.log(name+"added element")
                        return name;
                })

      // for (const key in namesArray) {
      //   const element = namesArray[key];
      //   console.log(element +"namesArray");
      // }

     // console.log(mapper+"Elements");    
      let sortedArray = namesArray.sort();

      // for (const key in sortedArray) {
      //   const element = sortedArray[key];
      //   console.log(element);  
      //    }

      let compareArrays = JSON.stringify(mapper) == JSON.stringify(sortedArray);
    
      assert.equal(compareArrays,true)

      browser.pause(3000);
      
      //  throw new Error("NOT IMPLEMENTED");
    
  });
  
  // BONUS LEVEL - this test gives you 15 points
  describe("Contact us form", function() {
    it("must send messages to shop administration", function() {
      browser.url('/customer-service-s-0');
    
      let currentForm = $("form[name='contact_form']")
      
      const name = currentForm.$("input[name='name']");
      name.setValue("Vlad testing");
      
      const email = currentForm.$("input[name='email']");
      email.setValue("Test123@gmail.com");

      const subject = currentForm.$("input[name='subject']");
      subject.setValue("Subject test");

      const message = currentForm.$("textarea[name='message']");
      message.setValue("Bla bla bla");
 
      const sendButton = currentForm.$("button[name='send']");
      sendButton.click();

      const successMessage = $('#notices .alert-success')
      assert(successMessage.isDisplayed(), 'User send email')

      const text = successMessage.getText()
      console.log('got message ', text)
      assert(text.includes('Your email has successfully been sent'), 'User send email success message is invalid')

      browser.pause(3000);
      //throw new Error("NOT IMPLEMENTED");
    });
  });
  });