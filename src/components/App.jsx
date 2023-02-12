import { useState } from 'react';
import { nanoid } from 'nanoid';

import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

import { Wrapper } from './App.module';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const addPhone = ({ name, number }) => {
    if (isDublicate(name)) {
      alert(`${name} is already ixist`);
      return false;
    }

    setContacts(preState => [{ id: nanoid(), name, number }, ...preState]);
    return true;
  };

  const isDublicate = name => {
    const normalizedName = name.toLowerCase();
    const result = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });

    return Boolean(result);
  };

  const removeContact = id => {
    setContacts(contacts.filter(item => item.id !== id));
  };

  const handleFilter = ({ target }) => {
    setFilter(target.value);
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
    return result;
  };

  return (
    <Wrapper>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={addPhone} />
      <div>
        <h2>Contacts</h2>
        <Filter handleChange={handleFilter} filter={filter} />
        <ContactList
          contacts={getFilteredContacts()}
          removeContact={removeContact}
        />
      </div>
    </Wrapper>
  );
};

/*
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('my-books'));
    if (contacts?.length) {
      // contacts && contacts.length
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts.length !== contacts.length) {
      localStorage.setItem('my-books', JSON.stringify(contacts));
    }
  }

  removeContact = id => {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(item => item.id !== id);
      return { contacts: newContacts };
    });
  };

  getFilteredContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });

    return result;
  }

  addPhone = ({ name, number }) => {
    if (this.isDublicate(name)) {
      alert(`${name} is already ixist`);
      return false;
    }
    this.setState(prevState => {
      const { contacts } = prevState;

      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      return { contacts: [newContact, ...contacts] };
    });
    return true;
  };

  handleFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  isDublicate(name) {
    const normalizedName = name.toLowerCase();
    const { contacts } = this.state;
    const result = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });

    return Boolean(result);
  }

  render() {
    const { handleFilter, addPhone, removeContact } = this;
    const { filter } = this.state;
    const contacts = this.getFilteredContacts();

    return (
      <Wrapper>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={addPhone} />
        <div>
          <h2>Contacts</h2>
          <Filter handleChange={handleFilter} filter={filter} />
          <ContactList contacts={contacts} removeContact={removeContact} />
        </div>
      </Wrapper>
    );
  }
}
*/
