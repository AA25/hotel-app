import React from "react";

export default function Layout({ children }: {children: React.ReactNode}) {
    return (
      <main>
        <div>
            Layout stuff
        </div>
          {children}
      </main>
    );
}
