import { SidebarProvider } from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";
import { BlogSidebar } from "./_component/blog-sidebar";

export default function BlogLayout({ children }: PropsWithChildren) {
  return <div className="relative">{children}</div>;
}
