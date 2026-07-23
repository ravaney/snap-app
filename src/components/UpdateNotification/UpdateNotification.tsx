import { useState, useEffect } from "react";
import styles from "./UpdateNotification.module.css";

export default function UpdateNotification() {
  const [showUpdate, setShowUpdate] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(
    null,
  );

  useEffect(() => {
    // Listen for the 'waiting' event from the service worker
    const handleWaiting = (event: Event) => {
      const swEvent = event as CustomEvent;
      setWaitingWorker(swEvent.detail?.waiting);
      setShowUpdate(true);
    };

    // Vite PWA plugin dispatches a 'sw-waiting' event
    window.addEventListener("sw-waiting", handleWaiting);

    return () => {
      window.removeEventListener("sw-waiting", handleWaiting);
    };
  }, []);

  const updateApp = () => {
    if (waitingWorker) {
      // Send a message to the service worker to skip waiting
      waitingWorker.postMessage({ type: "SKIP_WAITING" });
      window.location.reload();
    }
  };

  if (!showUpdate) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.banner}>
        <div className={styles.content}>
          <p className={styles.title}>🔄 New Update Available</p>
          <p className={styles.subtitle}>
            A new version of Wallet is ready. Update to continue.
          </p>
          <button className={styles.updateBtn} onClick={updateApp}>
            Update Now
          </button>
          <button
            className={styles.dismissBtn}
            onClick={() => setShowUpdate(false)}
          >
            Later
          </button>
        </div>
      </div>
    </div>
  );
}
