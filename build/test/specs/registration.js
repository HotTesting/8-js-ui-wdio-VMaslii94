const assert = require('assert');
describe('User', function () {
    it('can register on website', function () {
        browser.url('/create_account');
        const registrationForm = $('form[name="customer_form"]');
        const firstNameInput = registrationForm.$('input[name="firstname"]');
        firstNameInput.setValue('TestFirstName');
        const lastNameInput = registrationForm.$('input[name="lastname"]');
        lastNameInput.setValue('TestLastName');
        const countrySelect = registrationForm.$('select[name="country_code"]');
        countrySelect.selectByVisibleText('Ukraine');
        const emailInput = registrationForm.$('input[name="email"]');
        const email = `test${new Date().getTime() / 1000}@test.com`;
        emailInput.setValue(email);
        const phoneInput = registrationForm.$('input[name="phone"]');
        phoneInput.setValue('+380441111111');
        const passwordInput = registrationForm.$('input[name="password"]');
        passwordInput.setValue(email);
        const confirmPasswordInput = registrationForm.$('input[name="confirmed_password"]');
        confirmPasswordInput.setValue(email);
        const createAccountButton = registrationForm.$('button[name="create_account"]');
        createAccountButton.click();
        // browser.pause(120000)
        // '#notices .alert-success'
        // 'Your customer account has been created.'
        const successMessage = $('#notices .alert-success');
        assert(successMessage.isDisplayed(), 'User registered success message should be visible');
        const text = successMessage.getText();
        console.log('got message ', text);
        assert(text.includes('Your customer account has been created.'), 'User registered success message is invalid');
    });
});
