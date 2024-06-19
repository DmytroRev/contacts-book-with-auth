import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("Registration is successful!", {
          style: { backgroundColor: "silver" },
          position: "top-center",
        });
      })
      .catch(() => {
        toast.error("Registration error", {
          style: { backgroundColor: "red" },
          position: "top-center",
        });
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label>
          Username
          <Field type="text" name="name" />
        </label>
        <label>
          Email
          <Field type="email" name="email" />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
