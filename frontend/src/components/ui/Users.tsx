import axios from "axios";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
type UserType = {
  userId: string;
  firstname: string;
  lastName: string;
  username: string;
};

interface UserProps {
  user: UserType;
}

export function Users() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/v1/user/bulk?filter=" + filter,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          },
        );

        setUsers(res.data.User);
        console.log("Api called");
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    }
    let clear = setTimeout(() => {
      fetchUsers();
    }, 1000);

    return () => {
      clearTimeout(clear);
    };
  }, [filter]);

  return (
    <div className="flex flex-col p-4">
      <div className="font-bold text-xl">Users</div>
      <div>
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="Search users..."
          className="border border-neutral-400 outline-0 w-full py-1 mt-3 px-2 rounded-lg"
        />
      </div>

      <div>
        {Array.isArray(users) &&
          users.map((user) => <User key={user.userId} user={user} />)}
      </div>
    </div>
  );
}

function User({ user }: UserProps) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between mt-6">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            <FaUser />
          </div>
        </div>
        <div className="flex flex-col h-full justify-center pl-2 text-xl">
          <div>
            {user.firstname} {user.lastName}
          </div>
        </div>
      </div>
      <div className="mr-3">
        <button
          onClick={() => {
            navigate(
              "/sendMoney?id=" +
                user.userId +
                "&firstName=" +
                user.firstname +
                "&lastName=" +
                user.lastName,
            );
          }}
          type="submit"
          className="bg-neutral-800 hover:bg-neutral-700 text-neutral-50 rounded-lg py-1.5 px-2 cursor-pointer"
        >
          Send Money
        </button>
      </div>
    </div>
  );
}
