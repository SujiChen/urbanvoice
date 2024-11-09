import logo from './logo.svg';
import './App.css';
import CoverPage from './CoverPage/CoverPage';
import Login from './login/login';
import AuthProvider from './login/authprovider';




function App() {
  return (

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
      <Login />
      {/* Other components can access the user state via useAuth */}
      <CoverPage/>
      <Login/>
    </div>
    </AuthProvider>

  );
}

export default App;
