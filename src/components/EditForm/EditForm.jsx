import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { changeContact } from "../../redux/contacts/operations";
import css from "./EditForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function EditForm({ contact: { id, name, number }, onClose }) {
  const dispatch = useDispatch();
  const fieldId = useId();

  const handleEdit = (values, actions) => {
    const { name, number } = values;
    dispatch(changeContact({ id, name, number }))
      .unwrap()
      .then(() => {
        toast.success("Successfully edited!");
        onClose(); // Close the form after successful edit
      })
      .catch((error) => {
        toast.error(`This didn't work: ${error.message}`);
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: name || "",
        number: number || "",
      }}
      onSubmit={handleEdit}
      validationSchema={ContactSchema}
    >
      {({ isSubmitting }) => (
        <Form className={css.container}>
          <div className={css.list}>
            <label htmlFor={`${fieldId}-name`} className={css.label}>
              Name
            </label>
            <Field
              type="text"
              name="name"
              id={`${fieldId}-name`}
              className={css.input}
            />
            <ErrorMessage name="name" component="span" />
          </div>
          <div>
            <label htmlFor={`${fieldId}-number`} className={css.label}>
              Number
            </label>
            <Field
              type="tel"
              name="number"
              id={`${fieldId}-number`}
              className={css.input}
            />
            <ErrorMessage name="number" component="span" />
          </div>
          <div className={css.containerBtn}>
            <button className={css.btn} type="submit" disabled={isSubmitting}>
              Save
            </button>
            <button
              className={css.btn}
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
