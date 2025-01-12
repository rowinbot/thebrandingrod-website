import { clsx } from "@/util/clsx";
import { TopBar } from "./top-bar";
import { AppFooter } from "./app-footer";

export function AppLayout({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen gap-16 font-sans max-w-[1536px] mx-auto">
      <TopBar />

      <main className={clsx("row-start-2 px-8", className)}>{children}</main>

      <AppFooter />
    </div>
  );
}
