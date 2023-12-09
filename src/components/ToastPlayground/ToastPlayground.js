import React from "react";
import Button from "../Button/Button";
import styles from "./ToastPlayground.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastPlayground() {
  const messageRef = React.useRef();
  const { toastVariants, addToastMessage } = React.useContext(ToastContext);
  const [currentVariant, setCurrentVariant] = React.useState(toastVariants[0]);
  const [currentMessage, setCurrentMessage] = React.useState("Toast is ready!");

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toasty</h1>
      </header>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              ref={messageRef}
              value={currentMessage}
              className={styles.messageInput}
              onChange={() => setCurrentMessage(messageRef.current.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {toastVariants.map((opt) => (
              <label htmlFor={`variant-${opt}`}>
                <input
                  id={`variant-${opt}`}
                  key={`variant-${opt}`}
                  value={opt}
                  type="radio"
                  name="variant"
                  checked={currentVariant === opt}
                  onClick={() => setCurrentVariant(opt)}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button
              onClick={() => addToastMessage(currentVariant, currentMessage)}
            >
              Pop Toast!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
