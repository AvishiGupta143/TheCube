import React from "react";
import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/StudentStylesheets/Home.css";
import "../../assets/css/StudentStylesheets/SignUpLogin.css";
import NameSvg from "../../assets/css/StudentStylesheets/NameSvg.svg";
import EmailSvg from "../../assets/css/StudentStylesheets/EmailSvg.svg";
import StudentNoSvg from "../../assets/css/StudentStylesheets/StudentNoSvg.svg";
import DeptSvg from "../../assets/css/StudentStylesheets/DeptSvg.svg";
import PasswordSvg from "../../assets/css/StudentStylesheets/PasswordSvg.svg";
import PositionSvg from "../../assets/css/StudentStylesheets/PositionSvg.svg";
import ShowPassSvg from "../../assets/css/StudentStylesheets/ShowPassSvg.svg";
import TextInput from "../../components/TextInput";

import { Formik } from "formik";
import RegisterSchema from "../../schema/RegisterSchema";

const InitialVaues = RegisterSchema.InitialValues;

const Validation = RegisterSchema.RegisterSchema();

export default function RegisterComponent({
  ToggleView,
  ErrorOccured,
  RegisterHandle,
  Departments = [],
}) {
  return (
    <Fragment>
      <div className="SignUpDiv">
        <h3>Register to The Cube</h3>

        <Formik
          initialValues={InitialVaues}
          onSubmit={RegisterHandle}
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
                inputSVG={NameSvg}
                onChange={handleChange("FirstName")}
                placeholder="First Name"
                error={touched.FirstName === true ? errors.FirstName : null}
                onBlur={() => setFieldTouched("FirstName")}
              />

              <TextInput
                inputSVG={NameSvg}
                onChange={handleChange("LastName")}
                placeholder="Last Name"
                error={touched.LastName === true ? errors.LastName : null}
                onBlur={() => setFieldTouched("LastName")}
              />

              <TextInput
                inputSVG={EmailSvg}
                onChange={handleChange("Email")}
                placeholder="Email"
                error={touched.Email === true ? errors.Email : null}
                onBlur={() => setFieldTouched("Email")}
              />

              <div className="WhoAreYouDiv">
                <p>You are a: </p>
                <input
                  checked={values.AccountType === "Student"}
                  type="radio"
                  onClick={() => setFieldValue("AccountType", "Student")}
                  onChange={() => {}}
                ></input>
                <span>Student</span>

                <input
                  checked={values.AccountType === "Faculty"}
                  type="radio"
                  onClick={() => setFieldValue("AccountType", "Faculty")}
                  onChange={() => {}}
                ></input>
                <span>Faculty</span>
              </div>

              {values.AccountType === "Student" ? (
                <TextInput
                  inputSVG={StudentNoSvg}
                  onChange={handleChange("StudentNumber")}
                  placeholder="StudentNumber"
                  error={ touched.StudentNumber === true ? errors.StudentNumber : null}
                  onBlur={() => setFieldTouched("StudentNumber")}
                  TopDivClassName="EachInputDiv SMALLINPUT"
                />
              ) : (
                <TextInput
                  TopDivClassName="EachInputDiv SMALLINPUT"
                  inputSVG={PositionSvg}
                  onChange={handleChange("Position")}
                  placeholder="Position"
                  error={touched.Position === true ? errors.Position : null}
                  onBlur={() => setFieldTouched("Position")}
                />
              )}

              <div className="EachInputDiv SMALLINPUT">
                <img alt="" src={DeptSvg}></img>
                <select
                  onChange={handleChange("Department")}
                  id="departmentopts"
                  placeholder="Department"
                  onBlur={() => setFieldTouched("Department")}
                  error={touched.Department === true ? errors.Department : null}
                  style={{
                    border: touched.Department === true ? errors.Department ? "2px solid red" : "none" : "none",
                  }}
                >
                  <option value="">Departments</option>
                  {Departments.map((item, index) => (
                    <option value={item.Department} key={index}>
                      {item.Department}
                    </option>
                  ))}
                </select>
              </div>

              <div className="WhoAreYouDiv">
                <p>Gender: </p>
                <input
                  checked={values.Gender === "Male"}
                  onClick={() => setFieldValue("Gender", "Male")}
                  type="radio"
                  onChange={() => {}}
                ></input>
                <span>Male</span>

                <input
                  checked={values.Gender === "Female"}
                  onClick={() => setFieldValue("Gender", "Female")}
                  type="radio"
                  onChange={() => {}}
                ></input>
                <span>Female</span>
              </div>

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

              <TextInput
                inputSVG={PasswordSvg}
                onChange={handleChange("ConfirmPassword")}
                placeholder="Confirm Password"
                type="Password"
                TopDivClassName="EachInputDiv morewidth"
                suffixSVG={ShowPassSvg}
                error={
                  touched.ConfirmPassword === true
                    ? errors.ConfirmPassword
                    : null
                }
                onBlur={() => setFieldTouched("ConfirmPassword")}
              />

              {ErrorOccured ? (
                <p className="ERRORTEXT">Something Went Wrong</p>
              ) : null}
              <div className="SignUpLoginOpts">
                <button onClick={handleSubmit} type="button">
                  Sign Up
                </button>
                <span className="LightWeight">
                  Already a Member?
                  <span className="DarkWeight" onClick={ToggleView}>
                    Login
                  </span>
                </span>
              </div>
            </>
          )}
        </Formik>
      </div>
    </Fragment>
  );
}
