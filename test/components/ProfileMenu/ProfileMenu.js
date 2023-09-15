const SELECTORS = {
    PROFILE_BUTTON: '#basic-button',
    ITEM: '//li[@role="menuitem"]//*[text()="itemName"]',
};

const selectItem = async itemName => {
    await $(SELECTORS.PROFILE_BUTTON).click();
    const itemSelector = SELECTORS.ITEM.replace('itemName', itemName);
    const itemElement = $(itemSelector);
    await itemElement.waitForDisplayed();
    await itemElement.click();
};

export const ProfileMenu = {
    selectItem,
};
