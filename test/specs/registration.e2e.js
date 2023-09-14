import { expect } from 'chai';
import { faker } from '@faker-js/faker';
import MailosaurClient from 'mailosaur';

import { RegistrationPage } from '../pageobjects/signUp/registrationPage.js';
import { OtpPage } from '../pageobjects/signup/otpPage.js';
import { CreatePasswordPage } from '../pageobjects/signup/createPasswordPage.js';
import { InvoicesPage } from '../pageobjects/signup/invoicesPage.js';
import { extractNumberFromString } from '../utils/extractNumberFromString.js';
import { MAILOSAUR, APP_URL } from '../config.js';

const { API_KEY, SERVER_ID, DOMAIN } = MAILOSAUR;
const mailosaur = new MailosaurClient(API_KEY);

const username = faker.internet.displayName();
const password = faker.internet.password();
const email = `${username}@${SERVER_ID}.${DOMAIN}`;

describe('Registration', () => {
    it('should register a new user', async () => {
        await browser.url('sign-up');
        expect(await RegistrationPage.isOpened()).to.be.true;

        await RegistrationPage.enterEmail(email);
        expect(await OtpPage.isOpened()).to.be.true;

        const { subject } = await mailosaur.messages.get(SERVER_ID, { sentTo: email });
        const otpCode = extractNumberFromString(subject);
        await browser.keys([...otpCode]);
        await OtpPage.clickContinue();
        expect(await CreatePasswordPage.isOpened()).to.be.true;

        await CreatePasswordPage.enterPassword(password, password);
        await browser.pause(3000);

        expect(await InvoicesPage.isOpened()).to.be.true;
        const currentPageUrl = await browser.getUrl();
        expect(currentPageUrl).to.eql(`${APP_URL}invoices`);
    });
});
