import React from "react";
import clsx from "clsx";
import styles from "./Toast.module.css";
import {
  AlertCircle as Notice,
  AlertTriangle as Warning,
  CheckCircle as Success,
  XOctagon as Error,
  X as Close,
} from "react-feather";

function Toast({ id, variant, message, close }) {
  const [isHidden, setIsHidden] = React.useState(true);

  React.useEffect(() => setIsHidden(false), []);

  const Tag = variant;

  return (
    <div
      className={clsx(
        styles.toast,
        styles[variant.toLowerCase()],
        isHidden ? styles.hide : undefined
      )}
    >
      <div className={styles.flexBetween}>
        <div className={styles.flex}>
          <div className={styles.icon}>
            <Tag />
          </div>
          <div>{message}</div>
        </div>
        <div
          className={styles.close}
          onClick={() => {
            setIsHidden(true);
            close(id);
          }}
        >
          <Close />
        </div>
      </div>
    </div>
  );
}

export default Toast;
