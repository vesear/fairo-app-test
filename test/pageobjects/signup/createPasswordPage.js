import { isPageOpened } from '../basePage.js';

const SELECTORS = {
    PASSWORD_INPUT: "//input[@name='password']",
    REPEAT_PASSWORD_INPUT: "//input[@name='passwordRepeat']",
    CONTINUE_BUTTON: "//button[@type='submit']", // TODO: Move to shared components
};

const enterPassword = async (password, repeatPassword) => {
    await $(SELECTORS.PASSWORD_INPUT).setValue(password);
    await $(SELECTORS.REPEAT_PASSWORD_INPUT).setValue(repeatPassword);
    await $(SELECTORS.CONTINUE_BUTTON).click();
};

export const CreatePasswordPage = {
    enterPassword,
    isOpened: () => isPageOpened('Create Password', SELECTORS.REPEAT_PASSWORD_INPUT),
};
