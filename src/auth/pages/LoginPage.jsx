import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const {login} = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {

    //Pedimos el valor al LocalStorage, pero si es null me devuelvo un /
    const lastPath = localStorage.getItem('lastPath') || '/'
    
    login('Tomás Martinez');

    navigate(lastPath,{
      replace: true
    });
  }

  return (
    <div className="container mt-5">
      <h1>Heroes App With React</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={onLogin}
      >
        Login
      </button>
      <img className="img-fluid" src="src/img/fondo/login-bg2.jpg" alt="" />
    </div>
  )
}
