import React, { useState} from "react";
import { useNavigate} from "react-router-dom";


const Login = () => {

  const nevigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {

    e.preventDefault();
    nevigate('/main');

  };


  const onClick=(e)=>{
    e.preventDefault();
    nevigate('/signup');
  }

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center outer">
      <div className="px-4 py-5 text-light login">
        <h1 className="text-center display-4">Login</h1>
        <form onSubmit={handleClick}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={onChange}
              id="email"
              value={data.email}
              placeholder="name@example.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              password
            </label>
            <input
              type="password"
              name="password"
              onChange={onChange}
              className="form-control"
              value={data.password}
              id="password"
              placeholder=""
            />
          </div>

          <div className="d-flex justify-content-between mb-3 ">
            <button type="submit" className="btn btn-success"  variant="contained" color="success">
              login
            </button>
          </div>
          <div className="mb-3 ">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label me-3"
            >
              new user? register here!
            </label>
            
            <button className="btn btn-primary" color="info" onClick={onClick}>
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
