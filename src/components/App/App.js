import React from "react";
import ToastProvider from "../ToastProvider/ToastProvider";
import ToastPlayground from "../ToastPlayground/ToastPlayground";

function App() {
  return (
    <ToastProvider>
      <ToastPlayground />
    </ToastProvider>
  );
}

export default App;
