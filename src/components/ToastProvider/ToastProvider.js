import React from "react";
import styles from "./ToastProvider.module.css";
import Toast from "../Toast/Toast";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const toastVariants = ["Notice", "Warning", "Success", "Error"];
  const [toastList, setToastList] = React.useState([]);

  function addToastMessage(variant, message) {
    const newList = [...toastList];
    newList.push({ id: Math.random(), variant, message });
    setToastList(newList);
  }

  function removeToast(id) {
    setTimeout(() => {
      const newList = toastList.filter((toast) => toast.id != id);
      setToastList(newList);
    }, 350);
  }

  return (
    <ToastContext.Provider
      value={{
        toastVariants,
        addToastMessage,
      }}
    >
      <>
        <div className={styles.wrapper}>
          {toastList.map((toast) => (
            <Toast
              id={toast.id}
              key={toast.id}
              variant={toast.variant}
              message={toast.message}
              close={removeToast}
            />
          ))}
        </div>
        {children}
      </>
    </ToastContext.Provider>
  );
}

export default ToastProvider;
