import { PropTypes } from "prop-types";

import ReactModal from "react-modal";

const customStyles = {
  overlay: {
    maxHeight: "220px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: "500px",
  },
  content: {
    maxHeight: "220px",
    textAlign: "center",
  },
};

const CustomModal = (props) => {
  const { title, isModalOpen, closeModal } = props;
  return (
    <ReactModal
      style={customStyles}
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={false}
    >
      <div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold tracking-wide">
            You have applied to
          </span>
          <span>{title}</span>
        </div>
        <div className="m-5">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[100px]"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </ReactModal>
  );
};
CustomModal.propTypes = {
  title: PropTypes.string.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default CustomModal;
