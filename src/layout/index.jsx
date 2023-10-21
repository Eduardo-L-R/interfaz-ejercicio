import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../shared";

const RootLayout = () => {
  return (
    <div>
      {/* <Navbar />
      <main className="container mx-auto "> */}
        <Outlet />
      {/* </main>
      <Footer /> */}
    </div>
  );
};
export default RootLayout;
