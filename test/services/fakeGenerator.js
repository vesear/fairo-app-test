import { faker } from '@faker-js/faker';

const username = () => faker.internet.displayName();
const password = () => faker.internet.password();

export const fakeGenerator = {
    username,
    password,
};
