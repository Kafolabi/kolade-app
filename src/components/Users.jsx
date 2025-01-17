import { NavLink, Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import { users } from "../constants";

const Users = () => {
  return (
    <>
      <Nav />
      <div className="flex">
        <div className="flex flex-col gap-3 border border-red-500 w-1/4 px-6 py-10 text-xl min-h-screen">
          {users &&
            users.map((user) => (
              <NavLink
                to={`/users/${user.id}/${user.username}`}
                key={user.id}
                className={({ isActive }) => {
                  return isActive ? "text-indigo-600 underline" : "";
                }}
              >
                {user.username}
              </NavLink>
            ))}
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Users;
