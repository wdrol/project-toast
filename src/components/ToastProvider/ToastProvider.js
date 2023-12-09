import React from "react";
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
    const newList = toastList.filter((toast) => toast.id != id);
    setToastList(newList);
  }

  return (
    <ToastContext.Provider
      value={{
        toastVariants,
        addToastMessage,
      }}
    >
      <>
        <div>
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
