import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
// import * as Yup from "yup";
import { register } from "../../redux/auth/operations";

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
//   password: Yup.string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Required"),
// });

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      // validationSchema={validationSchema}
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
};
