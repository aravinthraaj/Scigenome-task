import "./App.css"
import profileImage from "./Assests/profile.png"
import PasswordInput from "./components/PasswordInput/PasswordInput"
import Button from "./components/Button/Button"
import back from "./Assests/back.svg"
import User from "./components/User/User"
import CustomCheckbox from "./components/CustomCheckbox/CustomCheckbox"

function App() {
  return (
    <div className="App">
      <div className="userCard">
        <div className="header">
          <img src={back} alt="icon"/>
          <span>Back</span>
        </div>
        <User
          image={profileImage}
          accountType="Personal Account"
          email="Andrew@polka.io"
        />
        <PasswordInput />
        <div className="signInWrapper">
          <CustomCheckbox name="Stay signed in" />
          <Button text="Sign in" />
        </div>
        <div className="divider"> </div>
        <div className="footer">
          <div>This site is protected by reCAPTCHA and the Google</div>
          <div>
            <span>Privacy Policy</span> and <span>Terms of Service</span> apply.
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
