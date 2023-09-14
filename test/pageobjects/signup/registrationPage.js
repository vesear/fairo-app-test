import { isPageOpened } from '../basePage.js';

const SELECTORS = {
    EMAIL_INPUT: '//input[@name="email"]',
    CONTINUE_BUTTON: '//button[text()="Continue"]',
    SIGN_IN_BUTTON: '//button[text()="Sign in"]',
};

const enterEmail = async email => {
    await $(SELECTORS.EMAIL_INPUT).setValue(email);
    await $(SELECTORS.CONTINUE_BUTTON).click();
};

export const RegistrationPage = {
    isOpened: () => isPageOpened('Registration', SELECTORS.SIGN_IN_BUTTON),
    enterEmail,
};
