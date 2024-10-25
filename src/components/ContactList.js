import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../redux/actions';
import ContactItem from './ContactItem';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onRemove={() => dispatch(removeContact(contact.id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
