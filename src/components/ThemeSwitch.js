import React, { useEffect } from "react";
import { Button } from "react-daisyui";
import { themeChange } from "theme-change";
import { MoonIcon } from "@heroicons/react/outline";

// TODO: auto-variant:
// 2 themes -> switch
// > 2 themes -> dropdown

//~ info ~//
// this component does not use the react-daysyui
// Dropdown component due to certain ui bugs

export default function ThemeSwitch(props) {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex="0" className="btn btn-ghost gap-3">
        <div className="hidden md:block normal-case">Theme</div>
        <MoonIcon className="h-6 w-6" />
      </label>
      <div
        tabIndex="0"
        className="menu dropdown-content rounded-box shadow-md bg-base-300 p-2 w-52 mt-[18px]" // I ♡ pixel perfect
      >
        {props.themes.map((theme) => {
          return (
            <Button
              key={theme.name}
              color="ghost"
              className="gap-3 justify-start normal-case"
              data-set-theme={theme.id}
            >
              {theme.icon}
              {theme.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
