import logo from './logo.svg';
import './App.css';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

//nested rout

// התוכן יוצג בתוך האלמנט 
//<Outlet></Outlet>
//אלמנט זה בשימוש רק 
//nested rout
//ולא ב
//rout
//רגיל

// לשים לב שבשונה מראוט רגיל לא מוסיפים \ לפני הניתוב
// גם ב
//Link
//וגם ב
// Rout

//<Link to="usersByPhone"> V
//<Link to="/usersByPhone"> X

function User() {

  const params = useParams();
const navigate = useNavigate();

//דוגמה לניווט בקור ולא בלינק
  const goMaster=()=>{
    navigate("/");

  }

  return (
    <div >
    <h1>User {params.id}</h1> 
    
    <Link to="usersByPhone">UsersByPhone</Link><br></br>
    <Link to="usersByEmail">UsersByEmail</Link>

<input type="button" value="Go Master" onClick={e=>goMaster()}></input>

     <Outlet></Outlet>

  </div>

  );
}

export default User;
