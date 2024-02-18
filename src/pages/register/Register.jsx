import "./register.css";

function Register() {
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
                    <input placeholder="Username" type="Email" className="loginInput" />
                    <input placeholder="Email" type="Email" className="loginInput" />
                    <input placeholder="Password" type="Email" className="loginInput" />
                    <input placeholder="Password Again" type="Email" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Log into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register