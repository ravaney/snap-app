import { useState, type MouseEvent } from "react";
import styles from "./PinPad.module.css";

type PinPadProps = {
  onDigit: (digit: string) => void;
  onDelete: () => void;
};

export default function PinPad({ onDigit, onDelete }: PinPadProps) {
  const digits = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "empty",
    "0",
    "delete",
  ];
  const [pressedKey, setPressedKey] = useState<string | null>(null);

  const showPress = (key: string) => setPressedKey(key);
  const releasePress = () => {
    window.setTimeout(() => setPressedKey(null), 120);
  };

  const handleButtonClick = (
    event: MouseEvent<HTMLButtonElement>,
    action: () => void,
  ) => {
    action();
    event.currentTarget.blur();
  };

  return (
    <div className={styles.grid} aria-label="PIN keypad">
      {digits.map((digit) => {
        if (digit === "empty") {
          return <span key="empty" className={styles.emptyKey} aria-hidden="true" />;
        }

        if (digit === "delete") {
          return (
            <button
              key="delete"
              className={`${styles.deleteBtn} ${
                pressedKey === digit ? styles.pressed : ""
              }`}
              onClick={(event) => handleButtonClick(event, onDelete)}
              onPointerDown={() => showPress(digit)}
              onPointerUp={releasePress}
              onPointerCancel={releasePress}
              type="button"
              aria-label="Delete last digit"
            >
              <span aria-hidden="true">x</span>
            </button>
          );
        }

        return (
          <button
            key={digit}
            className={`${styles.digitBtn} ${
              pressedKey === digit ? styles.pressed : ""
            }`}
            onClick={(event) =>
              handleButtonClick(event, () => onDigit(digit))
            }
            onPointerDown={() => showPress(digit)}
            onPointerUp={releasePress}
            onPointerCancel={releasePress}
            type="button"
            aria-label={`Enter ${digit}`}
          >
            {digit}
          </button>
        );
      })}
    </div>
  );
}
