import { isPageOpened } from '../basePage.js';

const SELECTORS = {
    OTP_INPUT: '//div[contains(@class,"react-code-input")]',
    CONTINUE_BUTTON: "//button[@type='submit']",
    OTP_ERROR_MESSAGE: "//div[@class='css-23ld5y react-code-input']/..//following-sibling::p",
    REQUEST_NEW_CODE_BUTTON: "//button[text()='Request a new code']",
    REQUEST_NEW_CODE_LABEL: '//button[contains(text(),"Request code in")]',
};

const clickContinue = async () => await $(SELECTORS.CONTINUE_BUTTON).click();
const getOtpErrorMessage = async () => await $(SELECTORS.OTP_ERROR_MESSAGE).getText();

export const OtpPage = {
    isOpened: () => isPageOpened('OTP', SELECTORS.OTP_INPUT),
    clickContinue,
    getOtpErrorMessage,
};
