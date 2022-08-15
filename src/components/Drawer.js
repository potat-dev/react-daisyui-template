import React from "react";
import { Menu, Button } from "react-daisyui";

export default function Drawer() {
  return (
    <Menu
      className="p-4 overflow-y-auto w-80 bg-base-100 text-base-content"
      vertical={true}
    >
      <Button variant="ghost">Menu Item 1</Button>
      <Button variant="ghost">Menu Item 2</Button>
    </Menu>
  );
}
