
import "./ModalStyles.css";
const Modal = props => {

  if (!props.show) {
      return null
  };
  
  return (
    <div className="popup">Welcome to book a course!
    <button className="btn" onClick={props.onClose}>No Thanks!</button>
    </div>
  );
};

export default Modal;





