import React, {useState} from "react";
import RegisterComponentContext from "@/context/RegisterComponentContext";

interface UserInterface {
  data: string
  nickname: string
  role: string
  birthDate: Date
  school: string
  score: number
  scoreRange: string
};

const RegisterComponentProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<UserInterface>();
  const [component, setComponent] = useState("RegisterBasic");

  const handleNextClick = (component: string) => {
    setComponent(component);
  };

  const handleBackClick = (component: string) => {
    setComponent(component);
  };

  return (
    <RegisterComponentContext.Provider value={{
      user,
      component,
      setComponent,
      handleNextClick,
      handleBackClick
    }}>
      {children}
    </RegisterComponentContext.Provider>
  );
};

export default RegisterComponentProvider