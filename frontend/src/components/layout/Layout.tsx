import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header/Header";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="relative bg-zinc-900 min-h-screen flex flex-col pt-10">
      <Header />
      <Navbar />
      <main className="flex-1 pt-4 px-2">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
