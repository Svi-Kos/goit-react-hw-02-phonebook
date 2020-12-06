import React, { Component } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import contacts from 'contacts.json';

class App extends Component {
  state = {
    contacts,
    name: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const contacts = this.state.contacts;

    return (
      <>
        <h2>Contacts</h2>
        <ContactList contacts={contacts} onDeleteItem={this.deleteContact} />
      </>
    );
  }
}

export default App;
