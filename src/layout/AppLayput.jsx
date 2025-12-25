import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-zinc-50">
      <aside className="h-min-screen w-60 bg-zinc-900 flex-shrink-0">
        <Nav />
      </aside>

      <main className="flex-1 overflow-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
