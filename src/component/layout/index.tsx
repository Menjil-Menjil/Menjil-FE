import Footer from "./footer";
import Header from "./header";

interface childrenType {
  children: any;
}

const Layout = ({children}: childrenType) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;