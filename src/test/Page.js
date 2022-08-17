import React from "react";
import { Button } from "react-daisyui";

//~ info ~//
// This is a test template for creating new demo pages

export default function TestPage(props) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 pt-4">
      <div>{props.name} Page</div>
      <div>Content will soon be added here</div>
      <Button color="primary" className="m-2">
        Hello World
      </Button>
    </div>
  );
}
