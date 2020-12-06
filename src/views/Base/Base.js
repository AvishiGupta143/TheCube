import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import { Route,Switch,useRouteMatch} from "react-router-dom";
import Home from '../Home/Home';
import TopBar from './TopBar';
import FacultySignUp from '../Home/FacultySignUp';
import StudentSignUp from '../Home/StudentSignUp';
import FacultyLogin from '../Home/FacultyLogin';
import StudentLogin from '../Home/StudentLogin';
import StudentWelcome from '../StudentFlow/StudentWelcome';
import StudentDashboardRoutes from '../StudentFlow/StudentDashboardRoutes';
import StudentList from '../DashBoard/StudentList';

export const Base = ()=> { 
   
    
    let { path, url } = useRouteMatch();
        return (
             <div className='BasePage'>
                 <TopBar/>
                <Switch>
                    <Route path={`${path}cube/facultysignup`} component={FacultySignUp}></Route>
                    <Route path={`${path}cube/studentsignup`} component={StudentSignUp}></Route>
                    <Route path={`${path}cube/facultylogin`} component={FacultyLogin}></Route>
                    <Route path={`${path}cube/studentlogin`} component={StudentLogin}></Route>
                    <Route path={`${path}cube/welcomestudent`} component={StudentWelcome}></Route>
                    <Route path={`${path}cube/studentlist`} component={StudentList}></Route>
                    <Route path={`${path}cube/studentdashboard`} component={StudentDashboardRoutes}></Route>
                    <Route path={`${path}`} component={Home}></Route>
                </Switch>
            </div>

        )
        
}
