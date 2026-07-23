import type {
  SignupEmailForm,
  SuccessUserCreation,
} from "../features/auth/pages/signup/formSchema";
import axios from "axios";
import { apiClient } from "./api";

export const signupNewUser = async (
  userData: SignupEmailForm,
): Promise<SuccessUserCreation> => {
  try {
    const { data } = await apiClient.post<SuccessUserCreation>(
      "/auth/signup",
      userData,
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError<{ message?: string }>(error)) {
      throw new Error(
        error.response?.data?.message ??
          error.message ??
          "Unable to create your account",
        { cause: error },
      );
    }

    throw error instanceof Error
      ? error
      : new Error("Unable to create your account", { cause: error });
  }
};
