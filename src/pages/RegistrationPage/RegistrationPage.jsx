import { PageTitle } from "../../components/PageTitle/PageTitle";
// import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <div className={css.container}>
      <div className={css.border}>
        <PageTitle>Register your account</PageTitle>
        <RegistrationForm />
      </div>
    </div>
  );
}
