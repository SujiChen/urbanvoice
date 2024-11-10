import react from 'react'
import "./App.css";
import CoverPage from "./CoverPage/CoverPage";
import AuthProvider from "./login/authprovider";
import Profile from "./Profile/Profile";


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
<
    </Router>
  );
}

export default App;
