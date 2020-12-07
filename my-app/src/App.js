import React, { Component } from 'react';
import shortid from 'shortid';
import './App.css';
import ContactList from './components/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import contacts from 'contacts.json';

class App extends Component {
  state = {
    contacts,
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const uniqName = this.state.contacts.filter(
      contact => name === contact.name,
    );

    uniqName.length !== 1
      ? this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }))
      : alert(`${name} is already in contacts`);
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <div className="phonebook">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteItem={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
