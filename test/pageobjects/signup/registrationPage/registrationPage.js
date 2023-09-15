import { isPageOpened, openPage } from '../../basePage.js';
import { ENDPOINTS } from '../../../constants/endpoints.js';

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
    enterEmail,
    open: () => openPage(ENDPOINTS.SIGNUP),
    isOpened: () => isPageOpened('Registration', SELECTORS.SIGN_IN_BUTTON),
};
