import { ContactList } from "../../components/ContactsList/ContactsList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { useEffect, useState } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import css from "./ContactsPage.module.css";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import EditForm from "../../components/EditForm/EditForm";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const [isEditing, setIsEditing] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

  const handleEdit = (contact) => {
    setCurrentContact(contact);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setCurrentContact(null);
    setIsEditing(false);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <div className={css.border}>
        <PageTitle>Phonebook</PageTitle>
        {isEditing ? (
          <EditForm contact={currentContact} onClose={handleCancelEdit} />
        ) : (
          <ContactForm />
        )}
        <SearchBox />
      </div>
      {isLoading && <div>Loading...</div>}
      <ContactList onEdit={handleEdit} />
      {isError && <div>Error...</div>}
    </div>
  );
}
