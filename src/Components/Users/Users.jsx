import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const users = useLoaderData([]);

  return (
    <div className="grid grid-cols-4 gap-5 my-4">
      {users.map((user) => <User key={user.id} user = {user}></User> )}
    </div>
  );
};

export default Users;
