import React from 'react';

const ContactItem = ({ contact, onRemove }) => {
  return (
    <li>
      <p>{contact.name}</p>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <button onClick={onRemove}>Remover</button>
      {/* Aqui você pode adicionar a funcionalidade de edição */}
    </li>
  );
};

export default ContactItem;
