import useUsers from "../hooks/useUsers";
import UserCard from "./UserCard";

const UserGrid = () => {
  const { users, loading } = useUsers();

  if (loading) {
    return <div className="loader">Loading profiles...</div>;
  }

  return (
    <div className="user-grid">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default UserGrid;
