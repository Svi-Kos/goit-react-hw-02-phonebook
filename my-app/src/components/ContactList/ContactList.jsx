import React from 'react';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteItem }) => (
  <ul className={s.contactList}>
    {contacts.map(({ id, name }) => (
      <li key={id} className={s.contactListItem}>
        <p>{name}</p>
        <button
          type="button"
          className={s.deleteBtn}
          onClick={() => onDeleteItem(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
