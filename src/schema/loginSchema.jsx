import * as Yup from "yup";

export  const loginSchema = Yup.object({
email: Yup.string().email().trim().required("Enter your email"),
password: Yup.string().min(8).trim().required("Enter your password"),
});

