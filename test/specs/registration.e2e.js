import { expect } from 'chai';

import { RegistrationPage } from '../pageobjects/signUp/registrationPage.js';

describe('Registration', () => {
    it('should register a new user', async () => {
        await browser.url('sign-up');
        expect(await RegistrationPage.isOpened()).to.be.true;
    });
});
