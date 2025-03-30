import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header/Header";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="relative bg-zinc-900 min-h-screen pt-16">
      <Header />
      <Navbar />
      <main className="pt-4 px-2">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
