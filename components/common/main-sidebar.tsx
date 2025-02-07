"use client";

import * as React from "react";
import Link from "next/link";
import {
  Plus,
  Monitor,
  UserCircle,
  Server,
  LayoutDashboard,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
export function MainSidebar() {
  const { user } = useUser();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="flex items-center justify-between border-b px-4 py-4">
        {isCollapsed ? (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Plus className="h-4 w-4" />
                <span className="sr-only">New Chat</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">New Chat</TooltipContent>
          </Tooltip>
        ) : (
          <>
            <div className="flex items-center w-full justify-between">
              <div className="flex items-center">
                <Database className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">DataOps</span>
              </div>
              <SidebarTrigger className="h-7 w-7 flex-shrink-0" />
            </div>
            <Button
              variant="outline"
              className="w-full justify-start gap-2 text-muted-foreground mt-4"
            >
              <Plus className="h-4 w-4" />
              New Chat
            </Button>
          </>
        )}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {[
                {
                  href: "/dashboard",
                  icon: LayoutDashboard,
                  label: "Dashboard",
                },
                {
                  href: "/clientsiderender",
                  icon: Monitor,
                  label: "Client Side Render",
                },

                {
                  href: "/serversiderender",
                  icon: Server,
                  label: "Server Side Render",
                },
                {
                  href: "/user-profile",
                  icon: UserCircle,
                  label: "User Profile",
                },
              ].map((item) => (
                <SidebarMenuItem key={item.href}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <SidebarMenuButton asChild>
                        <Link
                          href={item.href}
                          className="flex items-center py-2"
                        >
                          <item.icon className="mr-2 h-4 w-4" />
                          {!isCollapsed && <span>{item.label}</span>}
                        </Link>
                      </SidebarMenuButton>
                    </TooltipTrigger>
                    {isCollapsed && (
                      <TooltipContent side="right">{item.label}</TooltipContent>
                    )}
                  </Tooltip>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {isCollapsed && <SidebarTrigger className="h-7 w-full" />}

      <SidebarFooter className="border-t">
        <div className="flex items-center justify-start">
          <SignedIn>
            <UserButton />
          </SignedIn>

          {!isCollapsed && (
            <div className="flex flex-col items-start ml-2">
              <p className="text-sm font-medium ml-2">{user?.fullName}</p>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
