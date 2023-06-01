import Sidebar from "../sidebar/SideBar";

function Admin({ children }) {
  return (
    <div className="flex gap-5">
      <Sidebar></Sidebar>
      <div className="w-full max-h-screen overflow-y-scroll">
        <main className="max-w-5xl flex-1 mx-auto py-4 pr-5">{children}</main>
      </div>
    </div>
  );
}

export default Admin;
