import "./login.css";

function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Facebook</h3>
                <span className="loginDesc">
                    Connect with friends and world around you on Facebook.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" type="Email" className="loginInput" />
                    <input placeholder="Password" type="Email" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forget Password?</span>
                    <button className="loginRegisterButton">Create a new Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login