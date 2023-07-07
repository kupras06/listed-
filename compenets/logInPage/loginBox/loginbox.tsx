"use client"
import Image from "next/image";
import Form from "../loginform/loginform";
import style from "./loginbox.module.css";

const LoginBox = () => {



    const SignIn =()=>{
             console.log("oop");
             
    }

  return (
    <>
      <div>
       <div className={style["upperPart"]}>
       <div>
          <h1>Sign In</h1>
        </div>
        <div style={{marginTop:"1%"}}>
          <p>Sign in to your account</p>
        </div>
        <div className={style["googleLogin"]}>
          <div className={style["googleLogin"]} onClick={SignIn}>
            {" "}
            <Image
              src="/google.png"
              width="15"
              height="15"
              alt="google"
              style={{marginRight:"6%"}}
            ></Image>{" "}
            <p> Sign in with Google</p>
          </div>
          <div className={style["googleLogin"]} onClick={SignIn}>
            {" "}
            <Image
              src="/apple.png"
              width="15"
              height="15"
              style={{marginRight:"6%"}}
              alt="google"
            ></Image>{" "}
            <p> Sign in with Apple</p>
          </div>
        </div>
       </div>
        <Form />
      </div>
    </>
  );
};

export default LoginBox;
