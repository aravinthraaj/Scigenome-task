import './user.css'

function User({image,accountType,email}) {
  return (
    <div className="info">
      <img src={image} alt="profile" className="profileImage" />
      <span>{accountType}</span>
      <h2 className="email">{email}</h2>
    </div>
  )
}

export default User
