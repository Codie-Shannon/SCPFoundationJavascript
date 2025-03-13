// Import Pages
import Nav from "./pages/Nav";
import Search from "./pages/Search";
import SubjectFile from "./pages/SubjectFile";

// Import StyleSheet
import './css/App.css';

// Import React Hooks
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Functions
function App() {
  // Create States
  const [searchVal, setSearchVal] = useState("");
  const [LinkState, setLinkState] = useState(1);

  // Return Navigation Menu and Routes
  return (
    <Router>
      <Nav LinkState={LinkState} setLinkState={setLinkState} setSearchVal={setSearchVal}/>
        <Routes>
          <Route path="/Search" element={<Search setlinkstate={setLinkState} searchVal={searchVal}/>} />
          <Route path="/" element={<SubjectFile id={1} />} />
          <Route path="/SCP-015" element={<SubjectFile id={2} />} />
          <Route path="/SCP-021" element={<SubjectFile id={3} />} />
          <Route path="/SCP-162" element={<SubjectFile id={4} />} />
          <Route path="/SCP-188" element={<SubjectFile id={5} />} />
          <Route path="/SCP-250" element={<SubjectFile id={6} />} />
          <Route path="/SCP-309" element={<SubjectFile id={7} />} />
          <Route path="/SCP-479" element={<SubjectFile id={8} />} />
          <Route path="/SCP-529" element={<SubjectFile id={9} />} />
          <Route path="/SCP-667" element={<SubjectFile id={10} />} />
          <Route path="/SCP-679" element={<SubjectFile id={11} />} />
          <Route path="/SCP-686" element={<SubjectFile id={12} />} />
          <Route path="/SCP-740" element={<SubjectFile id={13} />} />
          <Route path="/SCP-753" element={<SubjectFile id={14} />} />
          <Route path="/SCP-779" element={<SubjectFile id={15} />} />
          <Route path="/SCP-844" element={<SubjectFile id={16} />} />
          <Route path="/SCP-863" element={<SubjectFile id={17} />} />
          <Route path="/SCP-871" element={<SubjectFile id={18} />} />
          <Route path="/SCP-902" element={<SubjectFile id={19} />} />
          <Route path="/SCP-966" element={<SubjectFile id={20} />} />
        </Routes>
    </Router>
  );
}

// Export App
export default App;
