import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const getAllContactsData = await fs.readFile(PATH_DB, 'utf-8');
    return getAllContactsData.toString();
  } catch (err) {
    console.log('Error:', err);
  }
};

console.log(await getAllContacts());
