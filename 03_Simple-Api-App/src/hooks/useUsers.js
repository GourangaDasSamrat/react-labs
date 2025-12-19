import { useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://randomuser.me/api/?results=12");
      const data = await res.json();
      setUsers(data.results);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  return { users, loading };
};

export default useUsers;
