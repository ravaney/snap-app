type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({ variant = "primary", ...props }: ButtonProps) {
  return <button {...props} className={`btn ${variant}`} />;
}

//bottom nav button
export const BottomNavButton = ({
  isActive,
  ...props
}: ButtonProps & { isActive?: boolean }) => {
  return (
    <button
      {...props}
      className={`bottom-nav-btn ${isActive ? "active" : ""}`}
    />
  );
};
