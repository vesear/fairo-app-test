import { isPageOpened } from '../basePage.js';

const SELECTORS = {
    WELCOME_MODAL_HEADER: "//div[text()='Welcome to Fairo!']",
};

export const InvoicesPage = {
    isOpened: () => isPageOpened('Invoices', SELECTORS.WELCOME_MODAL_HEADER),
};
