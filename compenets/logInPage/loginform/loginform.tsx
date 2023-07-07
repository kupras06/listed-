import style from "./loginform.module.css"


const Form = () => {
  return (
    <div>
      <div className={style["formBox"]}>
        <form>
          <div>
            <div className={style["formLabel"]}>
              <label>Email address</label>
            </div>
            <div>
              {" "}
              <input className={style["formInput"]} />
            </div>
          </div>
          <div>
            <div className={style["formLabel"]}>
              <label>Password</label>
            </div>
            <div>
              {" "}
              <input className={style["formInput"]} />
            </div>
          </div>
          <p className={style["forgetPass"]}>Forgot password?</p>
          <button className={style["SignButton"]}>Sign In</button>
        </form>
      </div>
      <p className={style["newRegister"]}>
        Don’t have an account? <span> Register here</span>
      </p>
    </div>
  );
};

export default Form;
