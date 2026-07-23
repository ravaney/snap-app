import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import styles from "../LoginPage.module.css";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { SignUpEmailSchema, type SignupEmailForm } from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputFieldError } from "../../../../components/common/InputFieldError";
import { ShowPasswordCheck } from "./const";
import { useSignup } from "../../../../hooks/useSignup";

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    minHeight: 44,
    borderRadius: 1,
    bgcolor: "#ffffff",
    color: "#10295a",
    fontWeight: 600,
    boxShadow: "0 8px 24px rgba(31, 71, 136, 0.10)",
    transition: "box-shadow 160ms ease",
    "& fieldset": { border: "1px solid rgba(211, 222, 238, 0.45)" },
    "&:hover fieldset": { borderColor: "rgba(79, 116, 179, 0.28)" },
    "&.Mui-focused": {
      boxShadow:
        "0 0 0 3px rgba(75, 105, 219, 0.12), 0 10px 26px rgba(31, 71, 136, 0.12)",
    },
    "&.Mui-focused fieldset": { borderColor: "#6478e8" },
  },
  "& .MuiOutlinedInput-input": {
    px: 2,
    py: 1.5,
    "&::placeholder": { color: "#71809e", opacity: 1, fontWeight: 500 },
  },
};

export const EmailSignup = () => {
  const { mutate, error } = useSignup();
  const {
    control,
    handleSubmit,
    trigger,
    watch,
    formState: { errors, isValid },
  } = useForm<SignupEmailForm>({
    resolver: zodResolver(SignUpEmailSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  const onSubmit: SubmitHandler<SignupEmailForm> = (data) => {
    mutate(data);
  };
  const password = watch("password");

  return (
    <form
      style={{
        width: "100%",
        gap: 6,
        display: "flex",
        flexDirection: "column",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => (
          <TextField
            size="small"
            placeholder="First Name"
            {...field}
            sx={fieldSx}
          />
        )}
      />
      {errors.firstName && <InputFieldError text={errors.firstName.message} />}
      <Controller
        name="lastName"
        control={control}
        render={({ field }) => (
          <TextField
            size="small"
            placeholder="Last Name"
            {...field}
            sx={fieldSx}
          />
        )}
      />
      {errors.lastName && <InputFieldError text={errors.lastName.message} />}
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            size="small"
            placeholder="E-mail"
            type="email"
            sx={fieldSx}
            {...field}
          />
        )}
      />
      {errors.email && <InputFieldError text={errors.email.message} />}
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            size="small"
            placeholder="Password"
            type="password"
            sx={fieldSx}
            {...field}
            onChange={(event) => {
              field.onChange(event);
              void trigger("confirmPassword");
            }}
          />
        )}
      />
      {errors.password && <InputFieldError text={errors.password.message} />}
      <Controller
        name="confirmPassword"
        control={control}
        render={({ field }) => (
          <TextField
            size="small"
            type="password"
            placeholder="Confirm Password"
            sx={fieldSx}
            {...field}
          />
        )}
      />
      {errors.confirmPassword && (
        <InputFieldError text={errors.confirmPassword.message} />
      )}
      <ShowPasswordCheck password={password} />
      <Controller
        name="acceptTerms"
        control={control}
        render={({ field }) => (
          <FormControlLabel
            {...field}
            sx={{ my: -0.5 }}
            control={<Checkbox size="small" />}
            label={
              <Typography variant="body2">
                I agree to the <Link to="/terms">Terms</Link>
                {" and "}
                <Link to="/privacy">Privacy Policy</Link>
              </Typography>
            }
          />
        )}
      />
      {errors.acceptTerms && (
        <InputFieldError text={errors.acceptTerms.message} />
      )}
      <Button
        disabled={!isValid}
        variant="contained"
        type="submit"
        className={styles.button}
        sx={{ minHeight: 44, borderRadius: 2.5, textTransform: "none" }}
      >
        Sign Up
      </Button>
      {error?.message && <InputFieldError text={error?.message} />}
    </form>
  );
};
