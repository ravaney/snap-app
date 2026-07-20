import type { MouseEvent } from "react";
import styles from "./PinPad.module.css";

type PinPadProps = {
  onDigit: (digit: string) => void;
  onDelete: () => void;
};

export default function PinPad({ onDigit, onDelete }: PinPadProps) {
  const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "delete"];

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
        if (digit === "delete") {
          return (
            <button
              key="delete"
              className={styles.deleteBtn}
              onClick={(event) => handleButtonClick(event, onDelete)}
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
            className={styles.digitBtn}
            onClick={(event) =>
              handleButtonClick(event, () => onDigit(digit))
            }
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
