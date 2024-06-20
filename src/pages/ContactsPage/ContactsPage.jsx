import { ContactList } from "../../components/ContactsList/ContactsList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import css from "./ContactsPage.module.css";
import { PageTitle } from "../../components/PageTitle/PageTitle";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <div className={css.border}>
        <PageTitle>Phonebook</PageTitle>
        <ContactForm />
        <SearchBox />
      </div>
      {isLoading && <div>Loading...</div>}
      <ContactList />
      {isError && <div>Error...</div>}
    </div>
  );
}
