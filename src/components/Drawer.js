import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button, Divider } from "react-daisyui";

export default function Drawer(props) {
  return (
    <Menu
      className="bg-base-100 text-base-content overflow-y-auto w-80 p-2"
      vertical={true}
    >
      <Link to="/">
        <Button
          color="ghost"
          className="normal-case text-xl"
          onClick={props.toggleDrawer}
        >
          {props.title}
        </Button>
      </Link>

      <Divider className="h-0.5 my-2 mx-4" />
      {props.pages.map((page) => (
        <Link to={page.path} key={page.name}>
          <Button
            key={page.name}
            color="ghost"
            className="w-full justify-start"
            onClick={props.toggleDrawer}
          >
            {page.name}
          </Button>
        </Link>
      ))}
    </Menu>
  );
}
