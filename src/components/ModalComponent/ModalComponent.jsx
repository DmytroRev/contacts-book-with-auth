import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDeletedContactId,
  selectIsModalOpen,
} from "../../redux/modal/selectors";
import { closeModal } from "../../redux/modal/slice";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import css from "./ModalComponent.module.css";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    background: "#000000cd",
  },
};
Modal.setAppElement("#root");
export default function ModalComponent() {
  const isOpenModal = useSelector(selectIsModalOpen);
  const deleteContactId = useSelector(selectDeletedContactId);
  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(deleteContact(deleteContactId))
      .unwrap()
      .then(() => {
        toast.success("Successfully deleted!");
      })
      .catch(() => {
        toast.error("This didn't work.");
      });
    dispatch(closeModal());
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={handleClose}
      style={customStyles}
      contentLabel="Confirm Modal"
    >
      <p className={css.title}>Do you really want to delete this contact?</p>
      <div className={css.btn}>
        <button className={css.btnYes} onClick={handleConfirm}>
          Yes
        </button>
        <button className={css.btnNo} onClick={handleClose}>
          No
        </button>
      </div>
    </Modal>
  );
}
