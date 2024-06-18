import { LoginForm } from "../../components/LoginForm/LoginForm";
import { PageTitle } from "../../components/PageTitle/PageTitle";

export const LoginPage = () => {
  return (
    <div>
      <PageTitle>Please log in</PageTitle>
      <LoginForm />
    </div>
  );
};
