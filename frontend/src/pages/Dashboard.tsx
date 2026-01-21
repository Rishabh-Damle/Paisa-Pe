import { AppBar } from "../components/ui/AppBar";
import { Balance } from "../components/ui/Balance";
import { Users } from "../components/ui/Users";
export function Dashboard() {
  return (
    <div className="bg-neutral-100 h-screen w-screen ">
      <AppBar></AppBar>
      <Balance value={5000}></Balance>
      <Users></Users>
    </div>
  );
}
