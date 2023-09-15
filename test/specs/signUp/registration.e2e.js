import { expect } from 'chai';
import MailosaurClient from 'mailosaur';

import { RegistrationPage } from '../../pageobjects/signup/registrationPage/registrationPage.js';
import { OtpPage } from '../../pageobjects/signup/otpPage.js';
import { CreatePasswordPage } from '../../pageobjects/signup/createPasswordPage.js';
import { InvoicesPage } from '../../pageobjects/signup/invoicesPage.js';
import { extractNumberFromString } from '../../utils/extractNumberFromString.js';
import { cookMailosaurEmail } from '../../utils/cookEmail.js';
import { fakeGenerator } from '../../services/fakeGenerator.js';
import { ENDPOINTS } from '../../constants/endpoints.js';
import { MAILOSAUR, APP_URL } from '../../constants/config.js';
import { PROFILE_MENU_ITEMS } from '../../components/ProfileMenu/constants.js';
import { inputWithValidation } from '../../components/inputWithValidation.js';
import { DUPLICATE_EMAIL_ERROR_MESSAGE } from '../../pageobjects/signup/registrationPage/constants.js';

const { API_KEY, SERVER_ID } = MAILOSAUR;
const mailosaur = new MailosaurClient(API_KEY);

const password = fakeGenerator.password();
const email = cookMailosaurEmail();

describe('Registration.', async () => {
    it('should register a new user. https://app.qase.io/case/FTP-1', async () => {
        await RegistrationPage.open();
        expect(await RegistrationPage.isOpened()).to.be.true;

        await RegistrationPage.enterEmail(email);
        expect(await OtpPage.isOpened()).to.be.true;

        const { subject } = await mailosaur.messages.get(SERVER_ID, { sentTo: email });
        const otpCode = extractNumberFromString(subject);
        await browser.keys([...otpCode]);
        await OtpPage.clickContinue();
        expect(await CreatePasswordPage.isOpened()).to.be.true;

        await CreatePasswordPage.enterPassword({ password, repeatPassword: password });

        // DEV_NOTE: Need to wait until modal is displayed. Can be added smart
        //           waiter in future
        await browser.pause(3000);

        expect(await InvoicesPage.isOpened()).to.be.true;
        const currentPageUrl = await browser.getUrl();
        expect(currentPageUrl).to.eql(`${APP_URL}${ENDPOINTS.INVOICES}`);
    });

    it('should not register a existing user. https://app.qase.io/case/FTP-4', async () => {
        await InvoicesPage.closeModal();
        await InvoicesPage.ProfileMenu.selectItem(PROFILE_MENU_ITEMS.SIGN_OUT);
        await InvoicesPage.confirmSignOut();

        expect(await RegistrationPage.isOpened()).to.be.true;

        await RegistrationPage.enterEmail(email);

        const actualErrorMessage = await inputWithValidation({ name: 'email' }).getError();
        expect(actualErrorMessage).to.be.eql(DUPLICATE_EMAIL_ERROR_MESSAGE);
    });
});
