import React from "react";
import styles from "./Toast.module.css";
import {
  AlertCircle as Notice,
  AlertTriangle as Warning,
  CheckCircle as Success,
  XOctagon as Error,
  X as Close,
} from "react-feather";

function Toast({ id, variant, message, close }) {
  return (
    <div className={styles.toast + " " + styles[variant.toLowerCase()]}>
      <div className={styles.flexBetween}>
        <div className={styles.flex}>
          <div className={styles.icon}>
            {variant === "Notice" && <Notice />}
            {variant === "Warning" && <Warning />}
            {variant === "Success" && <Success />}
            {variant === "Error" && <Error />}
          </div>
          <div>{message}</div>
        </div>
        <div className={styles.close} onClick={() => close(id)}>
          <Close />
        </div>
      </div>
    </div>
  );
}

export default Toast;
