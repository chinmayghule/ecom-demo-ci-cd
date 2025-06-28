"use client";

// import { worker } from "@/mocks/browser";
import { ReactNode, useEffect, useState } from "react";

export function MSWProvider({ children }: { children: ReactNode }) {
  const [workerReady, setWorkerReady] = useState(false);

  useEffect(() => {
    const f = async () => {
      if (process.env.NODE_ENV === "development") {
        // Dynamically import only in the browser
        const { worker } = await import("@/mocks/browser");
        await worker.start();
        setWorkerReady(true);
      }
    };

    f();
  }, []);

  if (process.env.NODE_ENV !== "development") {
    return <>{children}</>;
  }

  return (
    <>
      {workerReady ? (
        children
      ) : (
        <div className="min-h-screen grid place-items-center text-xl">
          Worker is starting...
        </div>
      )}
    </>
  );
}
