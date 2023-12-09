import React from "react";

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
          <ul>
            {toastList.map((toast) => (
              <li key={toast.id}>
                {`${toast.variant}: ${toast.message}`}{" "}
                <button onClick={() => removeToast(toast.id)}>X</button>
              </li>
            ))}
          </ul>
        </div>
        {children}
      </>
    </ToastContext.Provider>
  );
}

export default ToastProvider;
