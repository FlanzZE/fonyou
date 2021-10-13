import React, { useEffect } from "react";
import classNames from "classnames";
import { node, bool, func, string } from "prop-types";
import Modal from "./Modal";
import styles from "./Modal.module.css";

const ModalComponent = ({ children, isOpenModal, setShowModal, className }) => {

  useEffect(() => {
    document.body.style.overflow = isOpenModal ? "hidden" : "auto"
  }, [isOpenModal]);
  return (
    <>
      {
        isOpenModal && (
          <Modal
            isOpenModal={isOpenModal}
            setShowModal={e => { setShowModal(e); }}
            className={classNames(styles.modalContainer, className)}
            showModal={isOpenModal}
          >
            {children}
          </Modal>
        )
      }
    </>
  )
};
ModalComponent.propTypes = {
  children: node.isRequired,
  isOpenModal: bool.isRequired,
  setShowModal: func.isRequired,
  className: string,
};
ModalComponent.defaultProps = {
  className: "",
};
export default ModalComponent;
