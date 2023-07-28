import {useRouter} from "next/router";
import {signIn} from "next-auth/react";
import {useEffect, useState} from "react";

const callBackURL_login = "/"
const callBackURL_register = "/register"
//const callBackURL_login = "http://localhost:3000/" // 로컬 디버그용
//const callBackURL_register = "http://localhost:3000/register" // 로컬 디버그용

const Error = () => {
  const { error } = useRouter().query;
  const [message, setMessage] = useState<string>();
  const [provider, setProvider] = useState<string>();
  const router = useRouter();


  useEffect(() => {
    const socialLogin = async (provider: string, mode: string, url: string) => {
      const res: any = await signIn(provider, {
        redirect: false,
        callbackUrl: url, // 이유는 모르겠지만 둘다 있어야함(local 디버깅시)
        loginMode: mode
      });
      if (res?.error) {
        console.log(res.error);
      } else {
        await router.push(url); // 이유는 모르겠지만 둘다 있어야함(local 디버깅시)
      }
    }

    if (error && !error.includes("AccessDenied")) {
      const errObj = JSON.parse(error as string);

      setMessage(errObj?.message);
      setProvider(errObj?.provider)

      if(message === "Request failed with status code 409") {
        alert("이미 가입된 유저입니다. 로그인.");
        socialLogin(provider!, "login", callBackURL_login);
      }
      else if (message === "Request failed with status code 400") {
        alert("회원가입이 필요합니다.");
        socialLogin(provider!, "register", callBackURL_register);
      }

      console.log("error query:", message, provider)
    }

  }, [error, message, provider, router]);

  return (
    <>
      <div>{error}</div>
    </>
  );
};

export default Error;