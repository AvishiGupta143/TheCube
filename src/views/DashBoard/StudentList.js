import React, { Component, Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "../../assets/css/StudentStylesheets/MentorList.css";
import API from "../../API/API";

export class StudentList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            StudentsList:[],
        }
    }
    
    componentDidMount(){
        this.GetAllStudents()
    }

    GetAllStudents = async () => {
        // API CALL
        const response = await API.GetAllStudents();
        if (response.ok) {
          // this.setState({
          //   StudentsList:response.data.StudentsList
          // })
          // console.log(this.state.StudentsList)
          var StudentsList = response.data.StudentsList
          for (var i = 0; i < StudentsList.length; i++) {
            if (StudentsList[i]._id === localStorage.getItem("CurrentUserId")) {
                console.log("Matched "+localStorage.getItem("CurrentUserId"))
                StudentsList.splice(i,1)
                console.log(StudentsList)
                this.setState({
                  StudentsList:StudentsList
                })
            }
          }
          console.log(this.state.StudentsList)
        } else {
          console.log("Error");
        }
      };


    render() {
        return (
            <Fragment><div className='TeamPage'>
            <div className='TeamProcessFlow'>
                <h4>List of Student Members</h4>
            </div>
            <table className='TeamMemberTable'>
                <thead>
                    <th>NAME</th>
                    <th>STUDENT NUMBER</th>
                    <th>EMAIL ID</th>
                    <th>AVAILIBILITY</th>
                </thead>

                {this.state.StudentsList.map((id, val) =>
                <tr>
                <td className="STUDENTNAME">{id.Name}</td>
                <td>{id.StudentNumber}</td>
                <td>{id.Email}</td>
                <td className={id.Availibility ? "GREENCOLOR" : "REDCOLOR"}>{id.Availibility ? "Available" : "Unavailable"}</td>
                </tr>
                )}
            </table>
        </div>
            </Fragment>
        )
    }
}

export default StudentList
