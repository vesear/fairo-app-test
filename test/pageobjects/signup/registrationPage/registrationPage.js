import { isPageOpened, openPage } from '../../basePage.js';
import { ENDPOINTS } from '../../../constants/endpoints.js';

const SELECTORS = {
    EMAIL_INPUT: '//input[@name="email"]',
    EMAIL_INPUT_ERROR_MESSAGE: "//input[@name='email']/..//following-sibling::p",
    CONTINUE_BUTTON: '//button[text()="Continue"]',
    SIGN_IN_BUTTON: '//button[text()="Sign in"]',
};

const enterEmail = async email => {
    await $(SELECTORS.EMAIL_INPUT).setValue(email);
    await $(SELECTORS.CONTINUE_BUTTON).click();
};

const getEmailErrorMessage = async () => $(SELECTORS.EMAIL_INPUT_ERROR_MESSAGE).getText();

export const RegistrationPage = {
    enterEmail,
    getEmailErrorMessage,
    open: () => openPage(ENDPOINTS.SIGNUP),
    isOpened: () => isPageOpened('Registration', SELECTORS.SIGN_IN_BUTTON),
};
