const VITE_API_URL = import.meta.env.VITE_API_URL;
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Send } from "lucide-react";

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
          VITE_API_URL + "/api/v1/user/bulk?filter=" + filter,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          },
        );
        setUsers(res.data.User);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    }
    const clear = setTimeout(() => {
      fetchUsers();
    }, 500);

    return () => {
      clearTimeout(clear);
    };
  }, [filter]);

  return (
    <div className="mt-8">
      <h3 className="font-bold text-xl mb-4 text-black">People</h3>
      
      <div className="relative mb-6">
         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
         </div>
         <input
           onChange={(e) => setFilter(e.target.value)}
           type="text"
           placeholder="Search users..."
           className="pl-10 w-full px-4 py-2.5 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 bg-white"
         />
      </div>

      <div className="space-y-3">
        {Array.isArray(users) &&
          users.map((user) => <User key={user.userId} user={user} />)}
      </div>
    </div>
  );
}

function User({ user }: UserProps) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow duration-200 group gap-3">
      <div className="flex items-center space-x-3">
        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors text-black flex-shrink-0">
           <span className="text-lg sm:text-xl font-medium">
             {user.firstname[0].toUpperCase()}
           </span>
        </div>
        <div className="min-w-0">
          <h4 className="font-semibold text-gray-900 truncate">
            {user.firstname} {user.lastName}
          </h4>
          <p className="text-sm text-gray-500 truncate">@{user.username || 'user'}</p>
        </div>
      </div>
      
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
        className="bg-black hover:bg-gray-800 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors flex items-center justify-center space-x-2 cursor-pointer w-full sm:w-auto"
      >
        <span>Send</span>
        <Send className="w-4 h-4" />
      </button>
    </div>
  );
}
