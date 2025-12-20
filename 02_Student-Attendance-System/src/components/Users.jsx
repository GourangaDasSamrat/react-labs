import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";

const Users = () => {
  const { users, loading, fetchUsers } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDetailsClick = (userId) => {
    navigate(`/users/${userId}`);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-text">Loading users...</div>
      </div>
    );
  }

  return (
    <div className="users-container">
      <h1 className="users-title">Users Directory</h1>
      <div className="users-grid">
        {users.map((user, index) => (
          <div key={user.id} className="user-card" style={{ "--index": index }}>
            <div className="user-avatar-container">
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  user.name
                )}&size=120&background=random&color=fff&bold=true`}
                alt={user.name}
                className="user-avatar"
              />
              <h3 className="user-name">{user.name}</h3>
              <p className="user-username">@{user.username}</p>
            </div>
            <button
              onClick={() => handleDetailsClick(user.id)}
              className="details-button"
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
