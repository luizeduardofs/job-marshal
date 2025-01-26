import { Navbar } from "@/components/general/Navbar";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="max-7xl max-auto px-4 md:px-6 lg:px-8">
      <Navbar />
      {children}
    </div>
  );
}
