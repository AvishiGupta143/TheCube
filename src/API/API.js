import apiClient from "./client";

const GetAllUsersEnd = "/auth/get-users-list";
const GetAllDept = "/department/get-all-departments";
const GetAvailStuds = "/student/get-available-students";
const GetAllStuds = "/student/get-all-students";
const GetAvailFac = "/faculty/get-available-faculties";
const SendTeamReq = "/team-requests/create-team-request";
const LoginEnd = "/auth/login";
const RegisterEnd = "/auth/register";
const UserEnd = "/auth/users";

const GetAllUsers = () => apiClient.get(GetAllUsersEnd);

const GetEachUser = (id) => 
apiClient.get(
  UserEnd,
  {},
  {
    params: {
      id: id,
    },
  }
);

const GetAllDepartments = () => apiClient.get(GetAllDept);
const GetAvailableStudents = () => apiClient.get(GetAvailStuds);
const GetAllStudents = () => apiClient.get(GetAllStuds);
const GetAvailableFaculty = () => apiClient.get(GetAvailFac);



const SendTeamRequests = (body) => apiClient.post(SendTeamReq, body);


const Login = (body) => apiClient.post(LoginEnd, body);
const Register = (body) => apiClient.post(RegisterEnd, body);

const APIs = {
  GetAllUsers,
  GetEachUser,
  GetAllDepartments,
  GetAvailableStudents,
  GetAllStudents,
  GetAvailableFaculty,
  SendTeamRequests,
  Login,
  Register,
};

export default APIs;
