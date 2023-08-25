import Footer from "./Footer";
import Nabvar from "./Nabvar";

const Layout = ({ children }) => {
  return (
    <div>
      <Nabvar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
