import { IoCheckmarkCircle, IoEllipseOutline } from "react-icons/io5";
import styles from "./PasswordCheck.module.css";

interface PasswordRequirement {
  label: string;
  test: (password: string) => boolean;
}

const requirements: PasswordRequirement[] = [
  { label: "At least 8 characters", test: (pw) => pw.length >= 8 },
  { label: "One uppercase letter", test: (pw) => /[A-Z]/.test(pw) },
  { label: "One lowercase letter", test: (pw) => /[a-z]/.test(pw) },
  { label: "One number", test: (pw) => /\d/.test(pw) },
  {
    label: "One special character",
    test: (pw) => /[!@#$%^&*(),.?":{}|<>]/.test(pw),
  },
];

export const ShowPasswordCheck = ({ password }: { password: string }) => {
  return (
    <div className={styles.container} aria-live="polite">
      <p className={styles.title}>Your password must include:</p>
      <ul className={styles.list}>
        {requirements.map((requirement) => {
          const isValid = requirement.test(password);

          return (
            <li
              key={requirement.label}
              className={`${styles.requirement} ${isValid ? styles.valid : ""}`}
            >
              <span className={styles.icon} aria-hidden="true">
                {isValid ? <IoCheckmarkCircle /> : <IoEllipseOutline />}
              </span>
              <span>{requirement.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
