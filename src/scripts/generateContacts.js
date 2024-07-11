import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';

const generateContacts = async (number) => {
  try {
    // Читаємо існуючі контакти з файлу
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    // Генеруємо нові контакти
    for (let i = 0; i < number; i++) {
      const newContact = createFakeContact();
      contacts.push(newContact);
    }
    //Записуємо нові контакти у файл
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');

    console.log(`Successfully added ${number} new contacts.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

//Викликаємо функцію з числом контактів, які треба згенерувати
generateContacts(5);
