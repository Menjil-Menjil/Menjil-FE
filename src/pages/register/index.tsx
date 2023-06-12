import RegisterComponentProvider from "@/provider/RegisterComponentProvider";
import Register from "@/component/register";

const register = () => {
  return (
    <RegisterComponentProvider>
      <Register/>
    </RegisterComponentProvider>
  );
}

export default register;