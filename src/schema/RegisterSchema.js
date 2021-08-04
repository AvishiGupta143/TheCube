import * as Yup from "yup";

const InitialValues = {
  FirstName: "",
  LastName: "",
  Name: "",
  Email: "",
  Password: "",
  Gender: "Male",
  StudentNumber: "",
  AccountType: "Student",
  Position: "",
  Department: "",
  ConfirmPassword: "",
};

const RegisterSchema = () => {
  return Yup.object().shape({
    FirstName: Yup.string().required("First Name is required"),
    LastName: Yup.string().required("Last Name is required"),
    Email: Yup.string().required("Email is required").email(),
    AccountType: Yup.string().required("Please select your account type."),
    Department: Yup.string().required("Department is required"),
    StudentNumber: Yup.string(),
    Position: Yup.string(),
    Password: Yup.string().required("Password is required").min(6),
    ConfirmPassword: Yup.string().oneOf(
      [Yup.ref("Password"), null],
      "Passwords must match"
    ),
  });
};

const exports = {
  RegisterSchema,
  InitialValues,
};

export default exports;
