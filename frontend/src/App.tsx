import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Signin } from "./components/Signin";
import { Dashboard } from "./components/Dashboard";
import { Send } from "./components/Send";
import { Landing } from "./components/Landing";

function App() {
  return (
    <>
      <div>
        {" "}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing></Landing>}></Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/send" element={<Send />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
