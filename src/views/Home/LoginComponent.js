import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import { Link } from "react-router-dom";
import "../../assets/css/StudentStylesheets/Home.css";
import "../../assets/css/StudentStylesheets/SignUpLogin.css";
import EmailSvg from "../../assets/css/StudentStylesheets/EmailSvg.svg";
import PasswordSvg from "../../assets/css/StudentStylesheets/PasswordSvg.svg";
import ShowPassSvg from "../../assets/css/StudentStylesheets/ShowPassSvg.svg";
import TextInput from "../../components/TextInput";

import { Formik } from "formik";
import LoginSchema from "../../schema/LoginSchema";

const InitialVaues = LoginSchema.InitialValues;

const Validation = LoginSchema.LoginSchema();

export default function LoginComponent({
  ToggleView,
  LoginHandle,
  ErrorOccured,
}) {
  return (
    <div className="LoginDiv">
      <h3>Log In to The Cube</h3>

      <Formik
        initialValues={InitialVaues}
        onSubmit={LoginHandle}
        validationSchema={Validation}
      >
        {({
          handleChange,
          setFieldTouched,
          handleSubmit,
          setFieldValue,
          errors,
          touched,
          values,
        }) => (
          <>
            <TextInput
              inputSVG={EmailSvg}
              onChange={handleChange("Email")}
              placeholder="Email"
              error={touched.Email === true ? errors.Email : null}
              onBlur={() => setFieldTouched("Email")}
            />

            <TextInput
              inputSVG={PasswordSvg}
              onChange={handleChange("Password")}
              placeholder="Password"
              type="Password"
              TopDivClassName="EachInputDiv morewidth"
              suffixSVG={ShowPassSvg}
              error={touched.Password === true ? errors.Password : null}
              onBlur={() => setFieldTouched("Password")}
            />

            {ErrorOccured ? (
              <p className="ERRORTEXT">Something Went Wrong</p>
            ) : null}
            <div className="SignUpLoginOpts">
              <button onClick={handleSubmit} type='button'>Login</button>
              <span className="LightWeight">
                Not a Member?
                <span className="DarkWeight" onClick={ToggleView}>
                  Register
                </span>
              </span>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
}
