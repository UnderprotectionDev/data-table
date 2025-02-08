import { MainSidebar } from "@/components/common/main-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <MainSidebar />
      {children}
    </SidebarProvider>
  );
}
