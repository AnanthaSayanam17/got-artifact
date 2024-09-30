import "./App.css";
import UserProfile from "./components/UserProfile";
import Navbar from "./components/Navbar";
import SavedProfile from "./components/SavedProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<SavedProfile />} />
          <Route path="/user" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
