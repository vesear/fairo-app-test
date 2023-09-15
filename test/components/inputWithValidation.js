const SELECTORS = {
    ERROR_MESSAGE: "//input[@name='attrValue']/..//following-sibling::p",
};

export const inputWithValidation = ({ name }) => {
    const selector = SELECTORS.ERROR_MESSAGE.replace('attrValue', name);

    const getError = async () => $(selector).getText();

    return {
        getError,
    };
};
