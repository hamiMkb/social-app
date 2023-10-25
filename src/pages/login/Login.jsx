import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
 
   
      
  
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MKB</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on MKB.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" type="password" className="loginInput" />
            <Link className="loginNav" to="/profile" >
              <button className="loginButton">Log In</button>
            </Link> 

            <span className="loginForgot">Forgot Password?</span>
          <Link className="topbarNav" to="/register" >
            <button className="loginRegisterButton">
                Create a New Account
            </button>
          </Link> 

          
          </div>
        </div>
      </div>
    </div>
  );
}
