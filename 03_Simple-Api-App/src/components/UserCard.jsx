const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="avatar">
        <img src={user.picture.large} alt="profile" />
      </div>

      <h3>
        {user.name.first} {user.name.last}
      </h3>

      <p className="email">{user.email}</p>
      <span className="country">{user.location.country}</span>
    </div>
  );
};

export default UserCard;
