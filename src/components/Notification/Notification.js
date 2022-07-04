import { toast } from "react-toastify";

const Notification = () => {
  toast.error("Error! Bad request!", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3000,
  });
  toast.clearWaitingQueue();
};
export default Notification;
