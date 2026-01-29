import { AppBar } from "../components/ui/AppBar";
import { Balance } from "../components/ui/Balance";
import { Users } from "../components/ui/Users";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AppBar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Balance />
        <Users />
      </div>
    </div>
  );
}
