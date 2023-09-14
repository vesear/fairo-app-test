import { expect } from 'chai';
import { RegistrationPage } from '../../../pageobjects/signup/registrationPage/registrationPage.js';
import { OtpPage } from '../../../pageobjects/signup/otpPage.js';
import {
    EMAIL_EMPTY_ERROR_MESSAGE,
    EMAIL_VALIDATION_ERROR_MESSAGE,
} from '../../../pageobjects/signup/registrationPage/constants.js';
import { INVALID_EMAILS } from './testData.js';
import itParam from 'mocha-param';

describe('Email field validation', () => {
    itParam(`should has error message when value is invalid `, INVALID_EMAILS, async email => {
        await RegistrationPage.open();
        expect(await RegistrationPage.isOpened()).to.be.true;

        await RegistrationPage.enterEmail(email);
        const actualErrorMessage = await RegistrationPage.getEmailErrorMessage();

        expect(await OtpPage.isOpened()).to.be.false;
        expect(actualErrorMessage).to.eql(EMAIL_VALIDATION_ERROR_MESSAGE);
    });

    it('should has error message when value is empty', async () => {
        await RegistrationPage.open();
        expect(await RegistrationPage.isOpened()).to.be.true;

        await RegistrationPage.enterEmail('');
        const actualErrorMessage = await RegistrationPage.getEmailErrorMessage();

        expect(await OtpPage.isOpened()).to.be.false;
        expect(actualErrorMessage).to.eql(EMAIL_EMPTY_ERROR_MESSAGE);
    });
});
