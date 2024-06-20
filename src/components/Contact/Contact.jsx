import { IoMdContact } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
// import { deleteContact } from "../../redux/contactsOps";
import { deleteContact } from "../../redux/contacts/operations";

import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LiaEditSolid } from "react-icons/lia";

export const Contact = ({ onEdit, item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(item.id));
  };
  const handleEdit = () => {
    onEdit(item);
  };
  return (
    <div className={css.container}>
      <div className={css.list}>
        <p className={css.listItem}>
          <IoMdContact className={css.icon} size="100" />
          {item.name}
        </p>
        <p className={css.icon}>{item.number}</p>
      </div>
      <div className={css.containerBtn}>
        <button className={css.btn} onClick={handleDelete}>
          <RiDeleteBin6Line />
        </button>
        <button className={css.btn} onClick={handleEdit}>
          <LiaEditSolid />
        </button>
      </div>
    </div>
  );
};
