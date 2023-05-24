import logo from './logo.svg';
import './App.css';
import Users from './Users';
import { Link, Route, Routes } from 'react-router-dom';
import About from './About';
import User from './User';
import UsersByPhone from './UsersByPhone';
import UsersByEmail from './UsersByEmail';

function App() {
  return (
    <div className="App">
    <h1>Welcome to React Router!</h1>

    <Link to="/">Users </Link> <br></br>
    <Link to="about">About </Link>

    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/about" element={<About />} />
      <Route path="/user/:id" element={<User />} >
        <Route path="usersByPhone" element={<UsersByPhone />}></Route>
        <Route path="usersByEmail" element={<UsersByEmail />}></Route>
      </Route>


    </Routes>
  </div>
  );
}

export default App;
