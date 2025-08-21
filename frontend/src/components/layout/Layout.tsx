import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header/Header";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className=" min-h-screen bg-zinc-900 flex flex-col pt-10">
      <Header />
      <Navbar />
      <main className="flex-1 min-h-0 pt-4 px-2 overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
