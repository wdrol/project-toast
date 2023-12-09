import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const toastVariants = ["Notice", "Warning", "Success", "Error"];

  function addToastMessage(variant, message) {
    alert(`Added ${variant}: ${message}`);
  }

  return (
    <ToastContext.Provider
      value={{
        toastVariants,
        addToastMessage,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
