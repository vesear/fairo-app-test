import { isElementDisplayed } from '../services/element.js';

export const isPageOpened = async (pageName, pageId) => {
    const isDisplayed = await isElementDisplayed(pageId, { timeout: 3000 });
    if (!isDisplayed) {
        console.log(`${pageName} page is not opened!\nPageId: ${pageId}`);
        return false;
    }
    return true;
};
