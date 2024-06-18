// import { useDispatch, useSelector } from "react-redux";
// import ContactForm from "../ContactForm/ContactForm";
// import { ContactList } from "../ContactsList/ContactsList";
// import { SearchBox } from "../SearchBox/SearchBox";
// import SearchBox from "../SearchBox/SearchBox";
// import SearchBox from "../SearchBox/SearchBox";
// import css from "./App.module.css";
// import { selectError, selectLoading } from "../../redux/selectors";
import { Suspense } from "react";
// import { fetchContacts } from "../../redux/contactsOps";
import { Layot } from "../Layot/Layot";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";
import { ContactsPage } from "../../pages/ContactsPage/ContactsPage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
// import { RegistrationForm } from "../RegistrationForm/RegistrationForm";
import { RegistrationPage } from "../../pages/RegistrationPage/RegistrationPage";

export default function App() {
  // const dispatch = useDispatch();
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  return (
    <Layot>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </Layot>
  );
}

{
  /* <ContactForm />
<SearchBox />
<ContactList />
{loading && <div>Loading contacts...</div>}
{error && <div>Error loading contacts...</div>} */
}
