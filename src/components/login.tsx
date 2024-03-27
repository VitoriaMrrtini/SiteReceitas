//import MyForm from "./MyForm";
import './login.css';

function Login() {
  return (
    <div className="container">
      <form className="login-form" action="#" method="post">
        <h2>Login</h2>
        <input type="text" name="username" placeholder="Usuário" />
        <input type="password" name="password" placeholder="Senha" />
        <input type="submit" value="Entrar" />
      </form>
    </div>
  );
}

export default Login;
