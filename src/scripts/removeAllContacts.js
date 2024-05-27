import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    let removeData = JSON.parse(data);
    removeData = [];

    await fs.writeFile(PATH_DB, JSON.stringify(removeData), 'utf-8');

    console.log('Successful delete!');
  } catch (err) {
    console.log('Error delete:', err);
  }
};

await removeAllContacts();
