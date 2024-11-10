import react from 'react'
import "./App.css";
import CoverPage from "./CoverPage/CoverPage";
import AuthProvider from "./login/authprovider";
import Profile from "./Profile/Profile";
import AboutUs from "./AboutUs/AboutUs";
import LearnMore from "./LearnMore/LearnMore";
import CommunityForum from "./CommunityForum/CommunityForum";
import { BrowserRouter as Router, Routes, Route }from 'react-router-dom';
import { Link} from 'react-router-dom';
import Form from "./form/report-form";





function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* Other components can access the user state via useAuth */}
      {/* <CoverPage/> */}

      <Routes>
         {/* Route for the root path */}
          <Route path="/" element={<CoverPage />} />
          
          {/* Route for the profile page */}
          <Route path="/profile" element={<Profile />}  />

          <Route path="/aboutus" element={<AboutUs />}  />
          <Route path="/learnmore" element={<LearnMore />}  />

          <Route path="/communityforum" element={<CommunityForum />}  />

          <Route path="form/report-form" element={<Form />}  />


          
          {/* Optional: Handle 404/Not Found */}
          <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
    </AuthProvider>

    </Router>
  );
}

export default App;