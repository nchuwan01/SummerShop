import { Link } from "react-router-dom";
import "./login_css/sign_in.css";

function sign_in() {

    return (
   
      <div id="text_form">
        <div id="main_flex">
            <div className="label_input">
                <label>Username: </label>
                <input type="text" placeholder="Username" required></input>
            </div>
            <div className="label_input">
                <label>Password: </label>
                <input type="password" placeholder="Password" required></input>
            </div>
            <div id="sign_in">
                <div id="sign_button">
                    <button onClick={jump}>Sign In</button>
                </div>
                <Link to="/forgot" id="forgot">Forgot Password</Link>
                <Link to="/create" id="create">Create Account</Link>

            </div>
        </div>
      </div>
    );
  }
  
  export default sign_in;
  