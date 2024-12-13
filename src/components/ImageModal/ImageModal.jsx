import Modal from "react-modal";
import { image } from "./ImageModal.module.css";

export default function ImageModal({ src, isOpen, onClose }) {
  Modal.setAppElement("#root");
  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "#00000080",
        },
        content: {
          padding: 0,
          overflow: "hidden",
          border: "none",
          inset: "120px",
        },
      }}
    >
      <img className={image} src={src} />
    </Modal>
  );
}
