import style from "./login.module.css";
import LoginBox from "./loginBox/loginbox";


const Login = () => {
  
  return (
    <div className={style["logIn"]}>
      <div className={style["logo"]}>
        <h1 className={style["logoText"]}>Board.</h1>
      </div>
      <div className={style["logInBox"]}>
        <LoginBox />
      </div>
    </div>
  );
};

export default Login;
