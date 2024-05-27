import fs from 'node:fs/promises';

import { faker } from '@faker-js/faker';

import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
  const createOneFakeContact = () => ({
    fullName: faker.person.fullName(),
    number: faker.phone.number(),
    email: faker.internet.email(),
    jobTitle: faker.person.jobTitle(),
  });

  try {
    let readData = await fs.readFile(PATH_DB, 'utf-8');

    let existingContact = readData ? JSON.parse(readData) : [];

    existingContact.push(createOneFakeContact());

    const updateDate = JSON.stringify(existingContact, null, 1);

    await fs.writeFile(PATH_DB, updateDate, 'utf-8');
    console.log('Add');
  } catch (err) {
    console.log('No add:', err);
  }
};

await addOneContact();
