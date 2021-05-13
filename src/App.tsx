import Menu from "./Menu";
import { useUser } from "./context/user";
import "./Styles/Design.css";


const App = () => {
  const { user, login,logout } = useUser();

  return (
    <div className="DivPri">
      {user ? <Menu/> : <button className="Login" onClick={login}>Login with Google <i className="fab fa-google"></i> </button>}
      {user ? <button className="Logout"onClick={logout}>Logout</button> : ""}
    </div>
  );
};

export default App;