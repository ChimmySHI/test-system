import axios from "axios";
export function loginApi(loginInfo) {
  return axios.post("/api/user/login", {
    ...loginInfo
  });
}

export function usermessage() {
  const token = window.sessionStorage.getItem("token");
  return axios.get("/api/user/user", {
    headers: {
      authorization: token
    }
  });
}
export function identity() {
  const token = window.sessionStorage.getItem("token");
  return axios.get("/api/user/identity", {
    headers: {
      authorization: token
    }
  });
}
export function addusers(userinfo){
  const token = window.sessionStorage.getItem("token");
  console.log(token)
  return axios.post('/api/user',userinfo,{
    headers: {
      authorization:token,
    }
  })
}
export function userinfo(){
  const token = window.sessionStorage.getItem("token");
  console.log(token)
  return axios.get('/api/user/userInfo',{
    headers: {
      authorization:token,
    }
  })
}


