import { isPageOpened } from '../basePage.js';

const SELECTORS = {
    OTP_INPUT: '//div[contains(@class,"react-code-input")]',
    CONTINUE_BUTTON: "//button[@type='submit']",
};

const clickContinue = async () => await $(SELECTORS.CONTINUE_BUTTON).click();

export const OtpPage = {
    isOpened: () => isPageOpened('OTP', SELECTORS.OTP_INPUT),
    clickContinue,
};
