import React from "react";
import { Button } from "react-daisyui";
import Page from "./components/Page";

export default function App(props) {
  return (
    <Page config={props.config}>
      <div className="flex flex-col items-center justify-center h-1/2">
        <Button color="primary">Hello World</Button>
      </div>
    </Page>
  );
}
