import React from "react";
import { Button, Divider } from "react-daisyui";

//~ info ~//
// This is a test template for creating new demo pages

export default function TestPage(props) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 pt-4">
      <div>{props.name} Page</div>
      <div>Content will soon be added here</div>
      <Divider className="h-1" />
      <Button color="primary">Hello World</Button>
    </div>
  );
}
