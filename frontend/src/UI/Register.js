import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css"
function Register(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      FirstName: "",
      LastName:"",
      email: "",
      password: ""
    });

    const { FirstName,LastName, password, email} = formData;
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({...prevState,[name]: value
      }));
    };    
    const register = () => {
      // e.preventDefault();  ----- only we using this for form
      Axios.post("http://localhost:8000/register", {
          firstname:formData.FirstName,
          lastname:formData.LastName,
          email:formData.email,
          password:formData.password
         }).then((response) => {
            console.log("register response........:",response);
            navigate("/Login");
         });
       };
       return(
        <>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
          <div className="container mt-5">
          <div className="card mx-auto">
            <div className="panel-heading text-white">
              <h5 className="panel-title mb-0">Sign Up</h5>
              <div style={{ float: "right", fontSize: "85%", position: "relative", top: "10px" }}>
              <a id="signinlink" href="/Login"  style={{color: "white", position: "relative", top: "-10px" }}>
                Sign In
              </a>
            </div>
            </div>
            <div className="card-body">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="FirstName"
                    name="FirstName"
                    value={FirstName}
                    onChange={handleChange}
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="LastName"
                    name="LastName"
                    value={LastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="E-mail"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </div>
                <button type="button" onClick={register} className="btn btn text-white"  style={{width:'100%', height: '40px', backgroundColor: "#5d8aa8", fontSize: "16px" }}>
                  Sign Up
                </button>
            </div>
          </div>
        </div>
        </>
        
       )
}
export default Register;