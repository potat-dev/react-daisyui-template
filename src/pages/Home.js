import React from "react";
import { Link } from "react-router-dom";
import Typography from "../components/Typography";

export default function Home() {
  return (
    <Typography>
      <h1>Home Page</h1>
      <p>
        Hello, world! This is a simple example of a React app. This app is based
        on the create-react-app template, and it is intended to be used as a
        starting point for new React projects.
      </p>
      <p>
        This app is built using the following technologies:
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>React Tailwind CSS</li>
          <li>React daisyUI</li>
        </ul>
      </p>
      <p>
        You can find the <Link to="/about">about</Link> page here.
      </p>
    </Typography>
  );
}
