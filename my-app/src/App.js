import React, { Component } from 'react';
import shortid from 'shortid';
import './App.css';
import ContactList from './components/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import contacts from 'contacts.json';

class App extends Component {
  state = {
    contacts,
  };

  addContact = text => {
    const contact = {
      id: shortid.generate(),
      name: text,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const contacts = this.state.contacts;

    return (
      <div className="phonebook">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <ContactList contacts={contacts} onDeleteItem={this.deleteContact} />
      </div>
    );
  }
}

export default App;
