import styles from "./InputFieldError.module.css";

type InputFieldErrorProps = {
  text?: string;
  id?: string;
};

export const InputFieldError = ({ text, id }: InputFieldErrorProps) => {
  if (!text) return null;

  return (
    <div id={id} className={styles.error} role="alert">
      {text}
    </div>
  );
};
