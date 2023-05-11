import Footer from "./footer";
import Header from "./header";

interface childrenType {
  children: any;
}

const Layout = ({children}: childrenType) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;