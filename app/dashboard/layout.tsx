import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export const metadata = {
  title: "Tesla Dashboard",
  description: "A modern Tesla Dashboard created with Next.js App Router",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 overflow-y-auto bg-gray-100">{children}</main>
      </div>
    </div>
  );
}
