import { isPageOpened } from '../basePage.js';
import { ProfileMenu } from '../../components/ProfileMenu/ProfileMenu.js';

const SELECTORS = {
    WELCOME_MODAL_HEADER: "//div[text()='Welcome to Fairo!']",
    CLOSE_MODAL_BUTTON: '//*[@data-testid="CloseOutlinedIcon"]',
    PROFILE_BUTTON: '#basic-button',
    SIGN_OUT_MODAL_YES_BUTTON: '//button[text()="Yes"]',
};

const closeModal = async () => await $(SELECTORS.CLOSE_MODAL_BUTTON).click();
const confirmSignOut = async () => await $(SELECTORS.SIGN_OUT_MODAL_YES_BUTTON).click(); // TODO: Replace with universal solution

export const InvoicesPage = {
    isOpened: () => isPageOpened('Invoices', SELECTORS.WELCOME_MODAL_HEADER),
    ProfileMenu,
    closeModal,
    confirmSignOut,
};
