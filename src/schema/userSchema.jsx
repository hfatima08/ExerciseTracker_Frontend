import * as Yup from "yup";

export  const userSchema = Yup.object({
    name: Yup.string().max(30).trim("Enter your name").matches(/^[aA-zZ\s]+$/,"Name must include only alphabets").required("Enter your name"),
email: Yup.string().email().trim("Enter your Email").required("Enter your email"),
password: Yup.string().min(8).trim("Enter your password").required("Enter your password"),
});

