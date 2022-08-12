import * as yup from "yup";

const validationsLogin = yup.object({
    email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must contain at least 8 characters")
    .max(20, "Username shouldn't exceed 20 characters")
    .required("Enter your password")
});

export default validationsLogin;