import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import { Drawer } from "react-daisyui";
import { default as DrawerContent } from "./Drawer";

export default function Page(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Drawer
      open={drawerOpen}
      onClickOverlay={toggleDrawer}
      side={
        <DrawerContent
          title={props.config.title}
          pages={props.config.pages}
          toggleDrawer={toggleDrawer}
        />
      }
    >
      <div className="flex flex-col h-screen">
        <Navbar
          toggleMenu={toggleDrawer}
          title={props.config.title}
          pages={props.config.pages}
          themes={props.config.themes}
        />
        <div className="overflow-y-scroll scrollbar-sm md:scrollbar">
          <Outlet />
        </div>
      </div>
    </Drawer>
  );
}
