export const isElementDisplayed = async (selector, { timeout }) => {
    try {
        return await $(selector).waitForDisplayed({ timeout });
    } catch (e) {
        return false;
    }
};
