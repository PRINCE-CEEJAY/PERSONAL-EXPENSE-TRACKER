import React from "react";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-2 text-secondary-foreground">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-muted-foreground">Navbar</h1>
        {/* Links */}
      </div>
      <div className="text-white">
        <ModeToggle />
      </div>
    </nav>
  );
}
