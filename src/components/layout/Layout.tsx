import Navbar from "../navbar/Navbar";

type LayoutType = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
export default Layout;
