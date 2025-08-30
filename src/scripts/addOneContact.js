import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const contacts = await readContacts();
  const newContact = {
    id: contacts.length + 1,
    name: 'Stefanie',
    email: 'smorriartyb@artisteer.com',
    phone: '909-854-6637',
    job: 'Financial Analyst',
  };
  contacts.push(newContact);
  writeContacts(contacts);
};

addOneContact();
