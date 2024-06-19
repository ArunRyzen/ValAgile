import { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setLoginStatus } from "./Reducer/loginSlice";
import "./Login.css";

function Login(){
  Axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState ("");
//   const [role,setRole]= useState("");
//   console.log("role:",role)

const login = () => { 
    Axios.post("http://localhost:8000/login", {
       email: email,
       password: password,
    }).then((response) => {
      console.log("response", response);
       if (response.data.length > 0) {
        console.log("Login:", response.data[0].email);
        dispatch(setLoginStatus(response.data[0].email));
        localStorage.setItem('loginStatus', response.data[0].email);//localstorage use pannirukom reduxla initial value kuduka
        navigate("/Project");
       } else {
          console.log("error",response.data.message)
          dispatch(setLoginStatus(response.data.message));
       }
    });
};

useEffect(() => {
   Axios.get("http://localhost:8000/login")
   .then((response) => {
      console.log("session response",response)
      console.log("response.data.user",response.data.user)
       if (response.data.loggedIn === true) {
        navigate("/Project");
         //   setRole(response.data.user[0].role);
       }
   })
   .catch((error) => {
       console.error("Error fetching login data:", error);
   });
}, []);
  return(
    <div>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
    <div>
      <p className="alignleft">
        <img className="logo img-responsive" src="/Logo.png" alt="My_Logo" />
      </p>
    </div>
    <div><hr className="w-100" /></div>
  <div className="container mt-5">
    <div className="card mx-auto">
          <div className="panel-heading">
            <div className="panel-title" >Sign In</div>
          </div>
      <div className="card-body" >
          <div className="mb-3 input-group" >
          <span className="input-group-addon"><span className="glyphicon glyphicon-user"></span></span>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Email"              
              required
            />
          </div>
          <div className="mb-3 input-group">
            <span className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></span>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <div className="text-left">
            <button type="button" className="btn btn-success" style={{ fontSize: "16px" }} onClick={login}>Login</button>
          </div>
        <div><hr className="w-100" /></div>
        <div className="text-left mt-3">
          <p style={{ fontSize: '85%' }}>
            Don't have an account! <Link to="/Register">Sign Up Here</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>  
//     <div>
//         <div className="App container"> 
//   <div className="login card border-primary mb-3">
//     <div className="card-header">Login</div>  
//     <div className="card-body">
//       <input type="text" placeholder="Email-ID..." className="form-control mb-3" onChange={(e) => setemail(e.target.value)}/>
//       <input type="password" placeholder="Password..." className="form-control mb-3" onChange={(e) => setPassword(e.target.value)}/>
//       <button type="button" className="btn btn-primary me-2" onClick={login}>
//         Login
//       </button>
//       <button type="button" className="btn btn-primary" onClick={Register}>
//         Register
//       </button>
//     </div>
//   </div>
//   {/* <h1>{loginStatus}</h1> */}
//   {/* <h1>{role}</h1> */}
// </div>
//     </div>
   );
}
export default Login;