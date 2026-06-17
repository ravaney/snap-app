import { useEffect, useRef, useState } from "react";
import snapLogo from "../../../assets/snap.jpg";
import { useNavigate } from "react-router-dom";
import PinPad from "../components/PinPad";
import styles from "./LoginPage.module.css";
import { usePWAInstall } from "../../../hooks/usePWAInstall";

const PIN_LENGTH = 4;

export const Login = () => {
  const { canInstall, installApp } = usePWAInstall();

  const [pin, setPin] = useState("");
  const nav = useNavigate();
  const [showPinpad, setShowPinpad] = useState(false);
  const username = null;
  const handleDigit = (digit: string) => {
    if (pin.length < PIN_LENGTH) {
      setPin((prev) => (prev + digit).slice(0, PIN_LENGTH));
    }
  };

  const handleDelete = () => {
    setPin((prev) => prev.slice(0, -1));
  };
  const handleSubmit = () => {
    if (pin.length === PIN_LENGTH) {
      console.log("PIN entered:", pin);
      // TODO: verify PIN with backend / Zustand
      // For now, just navigate to home
      nav("/home");
    }
  };

  useEffect(() => {
    if (pin.length === PIN_LENGTH) {
      handleSubmit();
    }
  }, [pin]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleBoxClick = () => {
    inputRef.current?.focus(); // This triggers the keyboard
  };
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <div className={styles.formArea}>
          <header className={styles.header}>
            <img className={styles.logoIcon} src={snapLogo} alt="Snap" />
            <h1 className={styles.logo}>Snap</h1>
            <p className={styles.subtitle}>Send money instantly</p>
          </header>

          <div className={styles.fields}>
            <div onClick={handleBoxClick}>
              <input
                className={styles.input}
                placeholder="@snapname"
                ref={inputRef}
                type="text"
              />
            </div>
            <input
              autoFocus={!!username}
              onFocus={() => setShowPinpad(true)}
              className={styles.input}
              placeholder="Pin"
              value={pin}
            />
          </div>

          {showPinpad && (
            <div className={`${styles.padWrapper} ${styles.padVisible}`}>
              <PinPad onDigit={handleDigit} onDelete={handleDelete} />
            </div>
          )}
        </div>
        <div className={styles.headerActions}>
          {canInstall && (
            <button
              className={styles.installBtn}
              onClick={installApp}
              title="Install App"
            >
              📲install
            </button>
          )}
        </div>
        <a className={styles.signUp}>
          Don't have an account? <span>Sign Up</span>
        </a>
      </div>
    </main>
  );
};
