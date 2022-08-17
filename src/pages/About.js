import React from "react";
import Typography from "../components/Typography";

export default function About() {
  return (
    <Typography>
      <h1>About this template</h1>
      <p>
        One day I was just learning React and writing another test project with
        the same interface as all the previous ones. Then I thought: and why not
        take this basic interface of the React application and create a template
        based on it, so that in the future you can create such projects with one
        mouse click (GitHub {">"} My repository {">"} Use this template)
      </p>
      <p>
        And now you're looking at it and thinking: What is it for? After all,
        there are so many different templates for React applications on the web,
        why not use them?
      </p>
      <p>
        Well, the answer is this: I personally believe that they are too
        complicated and cumbersome for beginners, and that it can be difficult
        for me, as a person who has only recently started learning React, to
        understand them. But at the same time, I wanted to give novice
        developers not just a white screen, which is obtained when you delete
        all unnecessary files from the create-react-app application, but
        immediately the most necessary components - for example, the navigation
        bar and the sidebar. It also has the React Router already configured for
        the simplest menu, which developers will be able to customize for
        themselves in the future. It seems to me that, complete with extensive
        Tailwind CSS features and nice daisyUI components, this template is
        ideal for those who are just starting their journey of learning React ✨
      </p>
    </Typography>
  );
}
