import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { useId } from "react";
import toast from "react-hot-toast";
import { IoMdPersonAdd } from "react-icons/io";

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const validationControl = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short")
      .max(12, "Too long")
      .required("Required"),
  });

  const initialContact = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success("Successful!", {
          style: { backgroundColor: "silver" },
          position: "top-center",
        });
      })
      .catch(() => {
        toast.error("Try again.", {
          style: { backgroundColor: "orangered" },
          position: "top-center",
        });
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialContact}
      onSubmit={handleSubmit}
      validationSchema={validationControl}
    >
      <Form className={css.container}>
        <div className={css.list}>
          <label htmlFor={nameFieldId} className={css.label}>
            Name
          </label>
          <Field
            id={nameFieldId}
            type="text"
            name="name"
            className={css.input}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div>
          <label htmlFor={numberFieldId} className={css.label}>
            Number
          </label>
          <Field
            id={numberFieldId}
            type="tel"
            name="number"
            className={css.input}
          />
          <ErrorMessage
            className={css.errorNum}
            name="number"
            component="span"
          />
        </div>

        <button type="submit" className={css.btn}>
          <IoMdPersonAdd />
        </button>
      </Form>
    </Formik>
  );
}
