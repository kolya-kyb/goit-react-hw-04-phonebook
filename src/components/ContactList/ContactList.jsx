import PropTypes from 'prop-types';

import { ListWrapper } from './ContactList.styled';
const ContactList = ({ contacts, removeContact }) => {
  const contactItem = contacts.map(({ id, name, number }) => (
    <li key={id}>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => removeContact(id)} type="button">
        Delete
      </button>
    </li>
  ));
  return (
    <ListWrapper>
      <ul>{contactItem}</ul>
    </ListWrapper>
  );
};

export default ContactList;

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
