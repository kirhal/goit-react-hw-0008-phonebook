import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contactsOperations';
import { selectContacts } from 'redux/seleclors';

import Section from 'components/Section/Section';
import AddContacts from 'components/AddContact/AddContacts';
import RenderContacts from 'components/Contacts/RenderContacts';
import FilterContacts from 'components/Filter/FilterContacts';
console.log();

export default function Phonebook() {
  const { data, isLoading, error } = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Add contact">
        <AddContacts />
      </Section>
      <Section title="Contacts">
        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        {data.length !== 0 && (
          <>
            <FilterContacts />
            <RenderContacts />
          </>
        )}
      </Section>
    </>
  );
}
