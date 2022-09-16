import { useState } from "react"
import visibilityIcon from "../../Assests/visibility.svg"
import "./passwordInput.css"


function PasswordInput() {
  const [passwordShown, setPasswordShown] = useState(false)
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true)
  }
  return (
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
              {!passwordShown ?  <div className="strike"></div> : null}
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
  )
}

export default PasswordInput