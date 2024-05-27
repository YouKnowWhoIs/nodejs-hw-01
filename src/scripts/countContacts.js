import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const countContactsData = await fs.readFile(PATH_DB, 'utf-8');
    const contactsArray = JSON.parse(countContactsData);
    return contactsArray.length;
  } catch (err) {
    console.log('Error:', err);
  }
};

console.log(await countContacts());
