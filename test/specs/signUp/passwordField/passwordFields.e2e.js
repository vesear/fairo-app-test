import { expect } from 'chai';
import itParam from 'mocha-param';
import MailosaurClient from 'mailosaur';

import { RegistrationPage } from '../../../pageobjects/signup/registrationPage/registrationPage.js';
import { OtpPage } from '../../../pageobjects/signup/otpPage.js';
import { CreatePasswordPage } from '../../../pageobjects/signup/createPasswordPage.js';
import { cookMailosaurEmail } from '../../../utils/cookEmail.js';
import { extractNumberFromString } from '../../../utils/extractNumberFromString.js';

import { MAILOSAUR } from '../../../constants/config.js';
import { TEST_DATA } from './testData.js';

const { API_KEY, SERVER_ID } = MAILOSAUR;
const mailosaur = new MailosaurClient(API_KEY);

describe('Password/Repeat Password field only', () => {
    itParam(
        'should has error message when data is incorrect/not entered',
        TEST_DATA,
        async ({ password, repeatPassword, inputName, errorMessage }) => {
            const email = cookMailosaurEmail();
            await RegistrationPage.open();
            expect(await RegistrationPage.isOpened()).to.be.true;

            await RegistrationPage.enterEmail(email);
            expect(await OtpPage.isOpened()).to.be.true;

            const { subject } = await mailosaur.messages.get(SERVER_ID, { sentTo: email });
            const otpCode = extractNumberFromString(subject);
            await browser.keys([...otpCode]);
            await OtpPage.clickContinue();
            await validatePasswordPageOpened();

            await CreatePasswordPage.enterPassword({ password, repeatPassword });
            expect(await CreatePasswordPage.getInputErrorMessage(inputName)).to.be.eql(
                errorMessage
            );
            await validatePasswordPageOpened();
        }
    );
});

const validatePasswordPageOpened = async () => {
    expect(await CreatePasswordPage.isOpened()).to.be.true;
};
