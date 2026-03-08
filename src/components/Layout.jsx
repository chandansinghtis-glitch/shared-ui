import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children, user }) {

  return (
    <div className="flex">

      <Sidebar user={user} />

      <div className="flex-1 ml-[240px]">

        <Header user={user} />

        <main className="p-6">
          {children}
        </main>

      </div>

    </div>
  );
}