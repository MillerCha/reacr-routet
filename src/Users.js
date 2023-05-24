import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function Users() {
  return (
    <div >
    <h1>Users</h1>
    <Link to="/user/1">user 1</Link><br></br>
    <Link to="/user/2">user 2</Link><br></br>
    <Link to="/user/3">user 3</Link><br></br>
  </div>
  );
}

export default Users;
