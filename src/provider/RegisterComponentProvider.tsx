import React, {useState} from "react";
import RegisterComponentContext from "@/context/RegisterComponentContext";

const RegisterComponentProvider = ({children}: {children: React.ReactNode}) => {
  const [component, setComponent] = useState("RegisterBasic");

  const handleNextClick = (component: string) => {
    setComponent(component);
  };

  const handleBackClick = (component: string) => {
    setComponent(component);
  };

  return (
    <RegisterComponentContext.Provider value={{
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