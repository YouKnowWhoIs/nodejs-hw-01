import fs from 'node:fs/promises';

import { faker } from '@faker-js/faker';

import { PATH_DB } from '../constants/contacts.js';

const createFakeContact = () => ({
  fullName: faker.person.fullName(),
  number: faker.phone.number(),
  email: faker.internet.email(),
  jobTitle: faker.person.jobTitle(),
});

const generateContacts = async (number) => {
  try {
    const readData = await fs.readFile(PATH_DB, 'utf-8');

    const existingNumber = readData ? JSON.parse(readData) : [];

    const newContacts = Array.from({ length: number }, createFakeContact);

    const updateContacts = [...existingNumber, ...newContacts];

    const updateData = JSON.stringify(updateContacts, null, 1);

    await fs.writeFile(PATH_DB, updateData, 'utf-8');
    console.log('Save');
  } catch (err) {
    console.log('No save:', err);
  }
};

await generateContacts(3);
