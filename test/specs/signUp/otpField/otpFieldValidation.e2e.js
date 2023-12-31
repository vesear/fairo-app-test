import { expect } from 'chai';

import { RegistrationPage } from '../../../pageobjects/signup/registrationPage/registrationPage.js';
import { OtpPage } from '../../../pageobjects/signup/otpPage.js';
import { cookMailosaurEmail } from '../../../utils/cookEmail.js';

import {
    OTP_EMPTY_ERROR_MESSAGE,
    OTP_INCORRECT_ERROR_MESSAGE,
} from '../../../pageobjects/signup/registrationPage/constants.js';

const INVALID_OTP_CODE = '1111';

const email = cookMailosaurEmail();

describe('OTP validation. https://app.qase.io/case/FTP-3', async () => {
    beforeEach(async () => {
        await RegistrationPage.open();
    });

    it('should has error message when OTP code is invalid', async () => {
        expect(await RegistrationPage.isOpened()).to.be.true;

        await RegistrationPage.enterEmail(email);
        expect(await OtpPage.isOpened()).to.be.true;

        await browser.keys(INVALID_OTP_CODE);
        await OtpPage.clickContinue();

        expect(await OtpPage.getOtpErrorMessage()).to.be.eql(OTP_INCORRECT_ERROR_MESSAGE);
    });

    it('should has error message when OTP code not entered', async () => {
        expect(await RegistrationPage.isOpened()).to.be.true;

        await RegistrationPage.enterEmail(email);
        expect(await OtpPage.isOpened()).to.be.true;

        await OtpPage.clickContinue();

        expect(await OtpPage.getOtpErrorMessage()).to.be.eql(OTP_EMPTY_ERROR_MESSAGE);
    });
});
