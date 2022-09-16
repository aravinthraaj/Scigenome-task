import "./App.css"
import { useState } from "react"
import profileImage from "./Assests/profile.png"
import visibilityIcon from "./Assests/visibility.svg"
import back from "./Assests/back.svg"

function App() {
  const [passwordShown, setPasswordShown] = useState(false)
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true)
  }

  return (
    <div className="App">
      <div className="userCard">
        <div className="header">
          <img src={back} alt="profile" className="profileImage" />
          <span>Back</span>
        </div>
        <div className="info">
          <img src={profileImage} alt="profile" className="profileImage" />
          <span>Personal Account</span>
          <h2 className="email">Andrew@polka.io</h2>
        </div>
        <div className="passwordInputWrapper">
          <span className="title">Password</span>
          <div className="inputContainer">
            <input
              placeholder="Password"
              name="password"
              type={passwordShown ? "text" : "password"}
              className="passwordInput"
            />
            <div className="visibilityIcon">
              <img
                onClick={togglePasswordVisiblity}
                src={visibilityIcon}
                alt=""
              />
            </div>
          </div>

          <div className="resetPassword">
            {" "}
            Forgot password?&nbsp;&nbsp;<span>Reset</span>
          </div>
        </div>
        <div className="pass-wrapper"></div>
        <div className="signInWrapper">
          <label className="staySignedInContainer">
            <input type="checkbox" className="checkbox" />
            <span class="checkmark"></span>
            Stay signed in
          </label>
          <div className="signInButton">Sign in</div>
        </div>
        <div className="divider"> </div>
        <div className="footer">
          <div>This site is protected by reCAPTCHA and the Google</div>
          <div><span>Privacy Policy</span> and <span>Terms of Service</span> apply.</div>
        </div>
      </div>
    </div>
  )
}

export default App
