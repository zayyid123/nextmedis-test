import { NavItem } from "@/types/NavItems";

//Info: The following data is used for the sidebar navigation and Cmd K bar.
export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: "dashboard",
    isActive: false,
    shortcut: ["", ""],
    items: [], // Empty array as there are no child items for Dashboard
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: "user",
    shortcut: ["", ""],
    isActive: false,
    items: [], // No child items
  },
];
