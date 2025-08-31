import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    const newArr = contacts.slice(1, contacts.length - 1);
    await writeContacts(newArr);
  } catch (error) {
    console.error('Помилка при видаленні контакту:', error);
    throw error;
  }
};

removeLastContact();
