import * as Yup from "yup";

const InitialValues = {
  Email: "",
  Password: "",
};

const LoginSchema = () => {
  return Yup.object().shape({
    Email: Yup.string().required("Email is required").email(),
    Password: Yup.string().required("Password is required").min(6),
  });
};

const exports = {
  LoginSchema,
  InitialValues,
};

export default exports;
