import "./login_css/sign_in.css";

function sign_in() {

    const jump =()=>
    {
        const detail = fetch("http://localhost:4000")
        .then(res => res.json)
        .then(res => console.log(res));

    }
        

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
                <a href="/forgot" id="forgot">Forgot Password</a>
                <a href="/create" id="create">Create Account</a>


            </div>
        </div>

        
      </div>
        

    );
  }
  
  export default sign_in;
  