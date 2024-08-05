import { toast, ToastType, ToastPosition, ToastTheme } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

interface ToastifyAlertProps {
  text?: string;
  timer?: number;
  type?: ToastType;
  position?: ToastPosition;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  theme?: ToastTheme;
}

const ToastifyAlert = ({
  text = "Hecho",
  timer = 3000,
  type = "success",
  position = "top-right",
  hideProgressBar = false,
  closeOnClick = true,
  pauseOnHover = false,
  theme = "light",
}: ToastifyAlertProps) => {
  return toast(text, {
    type,
    position,
    autoClose: timer,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    progress: undefined,
    theme,
  });
};

export default ToastifyAlert;
