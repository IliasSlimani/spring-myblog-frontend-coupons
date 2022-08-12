import * as yup from "yup";

const validationsSignup = yup.object({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
    username: yup.string().required("Enter a valid Username")
    .min(8, "Username must contain at leat 8 characters")
    .max(20, "Username shouldn't exceed 20 characters")
    .matches(/^[a-zA-Z0-9]+$/, "Username must not include Special characters"),
  password: yup
    .string()
    .min(8, "Password must contain at least 8 characters")
    .max(20, "Username shouldn't exceed 20 characters")
    .required("Enter your password")
});

export default validationsSignup;