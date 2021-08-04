// import React, { Component } from 'react'
// import { Fragment } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "react-bootstrap/dist/react-bootstrap.min.js";
// import "../../assets/css/StudentStylesheets/Home.css";
// import { Link, withRouter } from 'react-router-dom';
// import Illustration from '../../assets/css/StudentStylesheets/Illustration.svg';
// import "../../assets/css/StudentStylesheets/SignUpLogin.css";
// import NameSvg from '../../assets/css/StudentStylesheets/NameSvg.svg';
// import EmailSvg from '../../assets/css/StudentStylesheets/EmailSvg.svg';
// import StudentNoSvg from '../../assets/css/StudentStylesheets/StudentNoSvg.svg';
// import DeptSvg from '../../assets/css/StudentStylesheets/DeptSvg.svg';
// import PasswordSvg from '../../assets/css/StudentStylesheets/PasswordSvg.svg';
// import GenderSvg from '../../assets/css/StudentStylesheets/GenderSvg.svg';
// import PositionSvg from '../../assets/css/StudentStylesheets/PositionSvg.svg';
// import ShowPassSvg from '../../assets/css/StudentStylesheets/ShowPassSvg.svg';
// import { ListDepartments, ListPositions } from '../../API';

// export class Home extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//              SignUpClicked:true,
//              LoginClicked:false,
//              validations: {
// 				is_password_matched_error: false,
// 				is_otp_error: false
// 			},

//         }
//     }
//     UpdateLoginView = (SignUpClicked,LoginClicked) =>{
//         this.setState({
//             SignUpClicked:SignUpClicked,
//             LoginClicked:LoginClicked
//         })
//     }

//     // comparePassword = (e) => {
// 	// 	this.setState({ confirm_password: e.target.value });
// 	// 	var validations = this.state.validations;
// 	// 	if(this.state.password !== e.target.value){
// 	// 		validations.is_password_matched_error = true;
// 	// 		this.setState({
// 	// 			validations: validations
// 	// 		})
// 	// 	}else{
// 	// 		validations.is_password_matched_error = false;
// 	// 		this.setState({
// 	// 			validations: validations
// 	// 		})
// 	// 	}
// 	// }
//     // UserRegister = (e) => {
// 	// 	e.preventDefault()
// 	// 	var validations = this.state.validations;
// 	// 	if(this.state.is_verified){
// 	// 		if(this.state.password !== this.state.confirm_password){
// 	// 			validations.is_password_matched_error = true;
// 	// 			this.setState({
// 	// 				validations: validations
// 	// 			})
// 	// 		}else{
// 	// 			if(this.state.user_name && this.state.user_email){
// 	// 				userRegister(this.state).then(res => {
// 	// 					const {statusCode, data} = res;
// 	// 						if(statusCode===200){
// 	// 							if(data && data.success === true){
// 	// 								cookies.set('token', data.token, {expires: new Date(data.expires)}, { path: 'http://localhost:3000/' });
// 	// 								this.props.history.push('/pos/auth/addStore');
// 	// 							}else{
// 	// 								this.setState({
// 	// 									error: data.message
// 	// 								})
// 	// 							}
// 	// 						}else{
// 	// 							this.setState({
// 	// 								error: "Something went wrong, Please check your details"
// 	// 							})
// 	// 						}
// 	// 						console.log(statusCode);
// 	// 						console.log(data);
// 	// 				})
// 	// 				.catch(e=>console.log(e));
// 	// 			}else{
// 	// 				this.setState({
// 	// 					error: "Some data fields are missing"
// 	// 				})
// 	// 			}
// 	// 		}
// 	// 	}else{
// 	// 		this.setState({
// 	// 			error: "Mobile Number not verified"
// 	// 		})
// 	// 	}
// 	// }

//     render() {
//         return (
// <Fragment>
//     <div className='HomePage'>
//         <div className='IllustrationDiv'>
//             <h3>The Cube</h3>
//             <h2>Get all of your project updates, when you need them!</h2>
//             <img alt="" src={Illustration}></img>
//         </div>
//         <div className='WorkingDiv'>
//             {this.state.SignUpClicked ? <SignUp UpdateLoginView={this.UpdateLoginView} LoginClicked={this.state.LoginClicked} SignUpClicked={this.state.SignUpClicked}/> : null}
//             {this.state.LoginClicked ? <Login UpdateLoginView={this.UpdateLoginView} LoginClicked={this.state.LoginClicked} SignUpClicked={this.state.SignUpClicked}/> : null}
//         </div>
//     </div>
// </Fragment>
//         )
//     }
// }

// export default Home

// class SignUp extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             SignUpClicked:this.props.SignUpClicked,
//             LoginClicked:this.props.LoginClicked,
//             FacultyClicked:false,
//             StudentClicked:true,
//             MaleClicked:true,
//             FemaleClicked:false,
//             ErrorOccured:false,
//             Departments:[],
//             Positions:[],
//             Name:"",

//         }
//     }

//     componentDidMount(){
        // ListDepartments().then(res=>{
        //     console.log(res)
        //     this.setState({
        //         Departments:res
        //     })
        // })
//         ListPositions().then(res=>{
//             console.log(res)
//             this.setState({
//                 Positions:res
//             })
//         })
//         console.log(this.state.Positions)
//         console.log(this.state.Departments)
//     }

//     LoginView = () =>{
//         this.setState({
//             SignUpClicked:false,
//             LoginClicked:true
//         })
//         this.props.UpdateLoginView(this.state.LoginClicked, this.state.SignUpClicked)
//     }

//     ToggleIdentity = (str) =>{
//         if (str === 'Student'){
//             this.setState({
//                 FacultyClicked:false,
//                 StudentClicked:true
//             })

//         }else if (str === 'Faculty'){
//             this.setState({
//                 FacultyClicked:true,
//                 StudentClicked:false
//             })

//         }
//     }

//     ToggleGender = (str) =>{
//         if (str === 'Male'){
//             this.setState({
//                 MaleClicked:true,
//                 FemaleClicked:false
//             })

//         }else if (str === 'Female'){
//             this.setState({
//                 MaleClicked:false,
//                 FemaleClicked:true
//             })

//         }
//     }

//     SignUp = () => {
//         this.setState({
//             ErrorOccured:true
//             // LoginClicked:true,
//             // SignUpClicked:false
//         })
//         // this.props.UpdateLoginView(this.state.LoginClicked, this.state.SignUpClicked)
//     }

//     GivePositions = () => {
//         var positionopts = document.getElementById('positionopts');
//         var Positions = this.state.Positions
//         Positions.forEach(op => positionopts.innerHTML += `<option value="${op}">${op}</option>`);
//     }

//     GiveDepartments = () => {
//         var Departments = this.state.Departments
//         var departmentopts = document.getElementById('departmentopts').options;
//         Departments.forEach(op => departmentopts.innerHTML += `<option value="${op}">${op}</option>`);
//     }

//     render() {
// return (
//     <Fragment>
//         <div className='SignUpDiv'>
//             <h3>Register to The Cube</h3>
//             <div className='EachInputDiv'>
//                 <img alt="" src={NameSvg}></img>
//                 <input
//                 value={this.state.FirstName}
//                 onChange={e => {
//                     this.setState({ FirstName: e.target.value });
//                 }}
//                 type='text' placeholder='First Name'></input>
//             </div>

//             <div className='EachInputDiv'>
//                 <img alt="" src={NameSvg}></img>
//                 <input
//                 value={this.state.LastName}
//                 onChange={e => {
//                     this.setState({ LastName: e.target.value });
//                 }}
//                 type='text' placeholder='Last Name'></input>
//             </div>

//             <div className='EachInputDiv'>
//                 <img alt="" src={EmailSvg}></img>
//                 <input
//                 value={this.state.Email}
//                 onChange={e => {
//                     this.setState({ Email: e.target.value });
//                 }}
//                 type='text' placeholder='Email Address'></input>
//             </div>

//             <div className='WhoAreYouDiv'>
//                 <p>You are a: </p>
//                 <input
//                 checked={this.state.StudentClicked}
//                 type='radio'
//                 onClick={ () => {this.ToggleIdentity('Student')}}></input>
//                 <span>Student</span>

//                 <input
//                 checked={this.state.FacultyClicked}
//                 type='radio'
//                 onClick={ () => {this.ToggleIdentity('Faculty')}}></input>
//                 <span>Faculty</span>
//             </div>

//             {this.state.StudentClicked ? <div className='EachInputDiv SMALLINPUT'>
//                 <img alt="" src={StudentNoSvg}></img>
//                 <input
//                 value={this.state.StudentNo}
//                 onChange={e => {
//                     this.setState({ StudentNo: e.target.value });
//                 }}
//                 type='text' placeholder='Student Number'></input>
//             </div> : null}

//             {this.state.FacultyClicked ? <div className='EachInputDiv SMALLINPUT'>
//                 <img alt="" src={PositionSvg}></img>
//                 <select id='positionopts'
//                 type='text' placeholder='Position'>
//                     <option>Positions</option>
//                     {/* {this.GivePositions()} */}
//                     {/* {this.state.Positions.map((id,key) => {
//                     return (
//                         <option value={key}> {key} </option>
//                     )
//                     })} */}
//                 </select>
//             </div> : null}

//             <div className='EachInputDiv SMALLINPUT'>
//                 <img alt="" src={DeptSvg}></img>
//                 <select id='departmentopts' type='text' placeholder='Department'>
//                     <option>Departments</option>
//                     {/* {this.GiveDepartments()} */}
//                     {/* {this.state.Departments.map((id,key) => {
//                     return (
//                         <option value={key}> {key} </option>
//                     )
//                     })} */}
//                 </select>
//             </div>

//             <div className='WhoAreYouDiv'>
//                 <p>Gender: </p>
//                 <input
//                 checked={this.state.MaleClicked}
//                 onClick={ () => {this.ToggleGender('Male')}}
//                 type='radio'></input>
//                 <span>Male</span>

//                 <input
//                 checked={this.state.FemaleClicked}
//                 onClick={ () => {this.ToggleGender('Female')}}
//                 type='radio'></input>
//                 <span>Female</span>
//             </div>

//             <div className='EachInputDiv morewidth'>
//                 <img alt="" src={PasswordSvg}></img>
//                 <input
//                 value={this.state.Password}
//                 onChange={e => {
//                     this.setState({ Password: e.target.value });
//                 }}
//                 type='text' placeholder='Password'></input>
//                 <img alt="" className='ShowSvg' src={ShowPassSvg}></img>
//             </div>
//             <div className='EachInputDiv morewidth'>
//                 <img alt="" src={PasswordSvg}></img>
//                 <input
//                 value={this.state.ConfirmPassword}
//                 onChange={e => {
//                     this.setState({ ConfirmPassword: e.target.value });
//                 }}
//                 type='text' placeholder='Confirm Password'></input>
//                 <img alt="" className='ShowSvg' src={ShowPassSvg}></img>
//             </div>

//             {this.state.ErrorOccured ? <p className='ERRORTEXT'>Something Went Wrong</p> : null}
//             <div className='SignUpLoginOpts'>
//             <button onClick={this.SignUp}>Sign Up</button>
//             <span className='LightWeight'>Already a Member?<span className='DarkWeight' onClick={this.LoginView}>Login</span></span>
//             </div>

//         </div>
//     </Fragment>
// )
//     }
// }

// class Login extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             SignUpClicked:this.props.SignUpClicked,
//             LoginClicked:this.props.LoginClicked
//         }
//     }

//     SignUpView = () =>{
//         this.setState({
//             SignUpClicked:true,
//             LoginClicked:false
//         })
//         this.props.UpdateLoginView(this.state.LoginClicked, this.state.SignUpClicked)
//     }

//     render() {
//         return (
//             <div className='LoginDiv'>
//                 <h3>Log In to The Cube</h3>

//                 <div className='EachInputDiv lesswidth'>
//                     <img alt="" src={EmailSvg}></img>
//                     <input type='text' placeholder='Email Address'></input>
//                 </div>

//                 <div className='EachInputDiv'>
//                     <img alt="" src={PasswordSvg}></img>
//                     <input type='text' placeholder='Confirm Password'></input>
//                     <img alt="" className='ShowSvg' src={ShowPassSvg}></img>
//                 </div>

//                 <div className='SignUpLoginOpts'>
//                     <Link to='/cube/studentdashboard/welcomestudent'>Login</Link>
//                     <span className='LightWeight'>Not a Member?<span className='DarkWeight' onClick={this.SignUpView}>Register</span></span>
//                 </div>

//             </div>
//         )
//     }
// }

import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/StudentStylesheets/Home.css";
import Illustration from "../../assets/css/StudentStylesheets/Illustration.svg";
import "../../assets/css/StudentStylesheets/SignUpLogin.css";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";
import API from "../../API/API";
import index from "../../API/index";
import { useHistory } from "react-router-dom";
import { history } from "../../history";

export default function Home() {
  const [Current, SetCurrent] = useState("Register");
  const [Departments, SetDepartments] = useState([]);

  useEffect(() => {
    // THis is called once only when this home Screen loads up

    //NEW APIs :
    GetAllDepartements();

    //Old APIs : 
    // ListAllDepartments();

  }, []); // Empty Bracket - Called once only on startup

  const GetAllDepartements = async () => {
    const allDept = await API.GetAllDepartments();
    if (allDept.ok) {
      SetDepartments(allDept.data.Departments);
    }
  };
  
  const RegisterHandle = async (values) => {
    // API CALL
    values.Name = values.FirstName + " " + values.LastName
    const response = await API.Register(values);
    if (response.ok) {
      SetCurrent("Login")
      console.log(response.data);
    } else {
      console.log(response.data);
    }
  };

  const LoginHandle = async (values) => {
    const response = await API.Login(values);
    if (response.ok) {
      var CurrentUserId = response.data.User._id
      localStorage.setItem("CurrentUserId", CurrentUserId)
      console.log(localStorage.getItem("CurrentUserId"))
      if (response.data.User.AccountType == "Student") {
        history.replace("/cube/studentdashboard/welcomestudent")
        window.location.reload()
      } else if (response.data.User.AccountType == "Faculty") {
        history.replace("/cube/facultydashboard/welcomefaculty")
        window.location.reload()
      }
    }
  };


  // const RegisterHandle = async (values) => {
  //   // API CALL
  //   var valueDict = {
  //     First_Name : values.FirstName,
  //     Last_Name : values.LastName,
  //     Email : values.Email,
  //     Password : values.Password,
  //     ConfirmPassword : values.ConfirmPassword,
  //     Gender : values.Gender,
  //     WhoAreYou : values.AccountType,
  //     Student_Number : values.StudentNumber,
  //     Department: values.Department,
  //     Position : values.Position
  //   }
  //   const response = await index.RegisterUser(valueDict);
  //   if (response.ok) {
  //     SetCurrent("Login")
  //     console.log(response.data);
  //   } else {
  //     console.log(response.data);
  //   }
  // };

  // const LoginHandle = async (values) => {
  //   var valueDict={
  //     Email : values.Email,
  //     Password : values.Password,
  //   }
  //   const response = await index.LoginUser(valueDict);
  //   if (response.ok) {
  //     if (response.data.AccountType == "Student") {
  //       history.replace("/cube/studentdashboard/welcomestudent")
  //       window.location.reload()
  //     } else if (response.data.AccountType == "Faculty") {
  //       history.replace("/cube/facultydashboard/welcomefaculty")
  //       window.location.reload()
  //     }
  //   }
  // };

  return (
    <Fragment>
      <div className="HomePage">
        <div className="IllustrationDiv">
          <h3>The Cube</h3>
          <h2>Get all of your project updates, when you need them!</h2>
          <img alt="" src={Illustration}></img>
        </div>
        <div className="WorkingDiv">
          {Current === "Login" ? (
            <>
              <LoginComponent
                ToggleView={() => SetCurrent("Register")}
                LoginHandle={LoginHandle}
              />
            </>
          ) : (
            <>
              <RegisterComponent
                ToggleView={() => SetCurrent("Login")}
                RegisterHandle={RegisterHandle}
                Departments={Departments}
              />
            </>
          )}
        </div>
      </div>
    </Fragment>
  );
}
