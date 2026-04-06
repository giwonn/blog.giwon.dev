import { Suspense } from "react";
import { Sidebar } from "@/components/sidebar/Sidebar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Suspense fallback={null}>
        <Sidebar />
      </Suspense>
    </>
  );
}
