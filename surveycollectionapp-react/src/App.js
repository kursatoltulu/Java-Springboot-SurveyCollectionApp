
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./layout/navbar";
import MakeSurvey1 from "./surveys/MakeSurvey1";
import MakeSurvey2 from "./surveys/MakeSurvey2";
import EditSurvey2 from "./surveys/EditSurvey2";
import EditSurvey1 from "./surveys/EditSurvey1";
import VievSurvey1 from "./surveys/VievSurvey1";
import VievSurvey2 from "./surveys/VievSurvey2";
import Surveys from "./pages/Surveys";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/makesurvey1" element={<MakeSurvey1 />} />
          <Route exact path="/makesurvey2" element={<MakeSurvey2 />} />
          <Route exact path="/editsurvey2/:id" element={<EditSurvey2 />} />
          <Route exact path="/editsurvey1/:id" element={<EditSurvey1 />} />
          <Route exact path="/surveys" element={<Surveys />} />
          <Route exact path="/viewsurvey1/:id" element={<VievSurvey1 />} />
          <Route exact path="/viewsurvey2/:id" element={<VievSurvey2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
