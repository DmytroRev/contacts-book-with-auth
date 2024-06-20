import { IoMdContact } from "react-icons/io";
// import { deleteContact } from "../../redux/contacts/operations";

import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LiaEditSolid } from "react-icons/lia";
import { openModal } from "../../redux/modal/slice";

export const Contact = ({ onEdit, item }) => {
  const dispatch = useDispatch(item.id);

  // const handleDelete = () => {
  //   dispatch(deleteContact());
  // };
  const handleEdit = () => {
    onEdit(item);
  };

  const handleOpenModal = () => {
    dispatch(openModal(item.id));
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
        <button className={css.btn} onClick={handleOpenModal}>
          <RiDeleteBin6Line />
        </button>
        <button className={css.btn} onClick={handleEdit}>
          <LiaEditSolid />
        </button>
      </div>
    </div>
  );
};
