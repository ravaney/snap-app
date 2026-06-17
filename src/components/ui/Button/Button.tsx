type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({ variant = "primary", ...props }: ButtonProps) {
  return <button {...props} className={`btn ${variant}`} />;
}
