import { ErrorMessage, Field, Form, Formik } from "formik";
// import { useDispatch } from "react-redux";
import * as Yup from "yup";

const validationControl = Yup.object().shape({
  email: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(5, "Too short")
    .max(18, "Too long")
    .required("Required"),
});
export const LoginForm = () => {
  // const dispatch = useDispatch();
  // const handleSubmit = (values, actions) => {
  //   dispatch(logIn(values));

  //   actions.resetForm();
  // };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      // onSubmit={handleSubmit}
      validationSchema={validationControl}
    >
      <Form autoComplete="off">
        <div>
          <label>
            Email
            <Field type="email" name="email" />
            <ErrorMessage name="name" component="span" />
          </label>
          <label>
            Password
            <Field type="password" name="password" />
            <ErrorMessage name="name" component="span" />
          </label>
          <button type="submit">Log In</button>
        </div>
      </Form>
    </Formik>
  );
};
