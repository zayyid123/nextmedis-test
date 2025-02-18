import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col w-full h-full">
        <SidebarTrigger />
        {children}
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
