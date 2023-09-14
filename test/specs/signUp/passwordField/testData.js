import { fakeGenerator } from '../../../services/fakeGenerator.js';
import {
    FIELD_IS_REQUIRED_ERROR_MESSAGE,
    PASSWORDS_DID_NOT_MATCH,
} from '../../../pageobjects/signup/registrationPage/constants.js';

const password = fakeGenerator.password();

const EMAIL_FIELDS_ATTRIBUTES = {
    REPEAT_PASSWORD: 'passwordRepeat',
    PASSWORD: 'password',
};

export const TEST_DATA = [
    {
        password,
        repeatPassword: '',
        inputName: EMAIL_FIELDS_ATTRIBUTES.REPEAT_PASSWORD,
        errorMessage: FIELD_IS_REQUIRED_ERROR_MESSAGE,
    },
    {
        password: '',
        repeatPassword: password,
        inputName: EMAIL_FIELDS_ATTRIBUTES.PASSWORD,
        errorMessage: FIELD_IS_REQUIRED_ERROR_MESSAGE,
    },
    {
        password,
        repeatPassword: fakeGenerator.password(),
        inputName: EMAIL_FIELDS_ATTRIBUTES.REPEAT_PASSWORD,
        errorMessage: PASSWORDS_DID_NOT_MATCH,
    },
];
