import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import { Route,Switch,useRouteMatch} from "react-router-dom";
import Home from '../Home/Home';
import "../../assets/css/Home.css";
import StudentDashboardRoutes from '../StudentFlow/StudentDashboardRoutes';

export const Base = ()=> { 
   
    
    let { path, url } = useRouteMatch();
        return (
             <div>
                <Switch>
                    <Route path={`${path}cube/studentdashboard`} component={StudentDashboardRoutes}></Route>
                    <Route path={`${path}`} component={Home}></Route>
                </Switch>
            </div>

        )
        
}
