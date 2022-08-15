import React, { useState } from "react";
import { Drawer } from "react-daisyui";
import { default as DrawerContent } from "./Drawer";
import Navbar from "./Navbar";

export default function Page(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Drawer
      open={drawerOpen}
      onClickOverlay={toggleDrawer}
      side={<DrawerContent />}
    >
      <Navbar
        toggleMenu={toggleDrawer}
        title={props.config.app_name}
        themes={props.config.themes}
      />
      {props.children}
    </Drawer>
  );
}
