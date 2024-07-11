import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]), 'utf-8');
    console.log('All contacts have been removed.');
  } catch (error) {
    console.error('Error removing contacts:', error);
  }
};

removeAllContacts();
