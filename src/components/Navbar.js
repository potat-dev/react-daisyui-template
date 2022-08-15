import React from "react";
import { Navbar as Nav, Button, Menu } from "react-daisyui";
import { MenuIcon } from "@heroicons/react/outline";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar(props) {
  return (
    <Nav className="bg-base-300">
      <Nav.Start>
        <Button
          color="ghost"
          onClick={props.toggleMenu}
          className="flex-none lg:hidden gap-3"
        >
          <MenuIcon className="h-6 w-6" />
          <div className="hidden md:block lg:hidden normal-case">Menu</div>
        </Button>

        <Button color="ghost" className=" hidden lg:block normal-case text-xl">
          {props.title}
        </Button>
      </Nav.Start>

      <Nav.Center>
        <Menu horizontal={true} className="hidden lg:flex gap-2">
          <Button color="ghost" className="normal-case">
            Item 1
          </Button>
          <Button color="ghost" className="normal-case">
            Item 2
          </Button>
          <Button color="ghost" className="normal-case">
            Item 3
          </Button>
        </Menu>

        <Button color="ghost" className="flex lg:hidden normal-case text-xl">
          {props.title}
        </Button>
      </Nav.Center>

      <Nav.End className="navbar-end">
        <ThemeSwitch themes={props.themes} />
      </Nav.End>
    </Nav>
  );
}
