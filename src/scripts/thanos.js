import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    let removeData = JSON.parse(data);

    removeData = removeData.filter(() => Math.random() > 0.5);

    await fs.writeFile(PATH_DB, JSON.stringify(removeData, null, 2), 'utf-8');

    console.log('Thanos was here');
  } catch (err) {
    console.log('Error:', err);
  }
};

await thanos();
