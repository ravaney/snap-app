import { useMutation } from "@tanstack/react-query";
import { signupNewUser } from "../services/signup";

export const useSignup = () => {
  return useMutation({
    mutationFn: signupNewUser,
  });
};
