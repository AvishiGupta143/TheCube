// import { API } from '../backend';
// import axios from "axios";
// // import Cookies from 'universal-cookie';
// axios.defaults.withCredentials =true;
// const cookies = new Cookies();
// var csrftoken = cookies.get('csrftoken	');

import apiClient from "./client";
export const host = "127.0.0.1:8000";

async function processResponse(response) {
  const statusCode = response.status;
  const data = response.json();
  const res = await Promise.all([statusCode, data]);
  return {
    statusCode: res[0],
    data: res[1],
  };
}

export const userRegister = async (user) => {
  console.log(user);
  try {
    const response = await fetch(`${host}/api/thecube/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(user),
    });
    return processResponse(response);
  } catch (err) {
    return console.log(err);
  }
};

export const ListDepartments = async () => {
  return new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:8000/api/thecube/getdepartment", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        if (res.status === 200) resolve(data);
        else reject(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const ListPositions = async () => {
  return new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:8000/api/thecube/getposition", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        if (res.status === 200) resolve(data);
        else reject(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};


const GetAllDept = "http://127.0.0.1:8000/api/thecube/getdepartment";
const RegisterEnd = "http://127.0.0.1:8000/api/thecube/register";
const LoginEnd = "http://127.0.0.1:8000/api/thecube/login";


const ListAllDepartments = () => apiClient.get(GetAllDept);
const RegisterUser = (body) => apiClient.post(RegisterEnd, body);
const LoginUser = (body) => apiClient.post(LoginEnd, body);

const indexs = {
  ListAllDepartments,
  RegisterUser,
  LoginUser,
};
export default indexs;