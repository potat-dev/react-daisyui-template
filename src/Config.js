import {
  SunIcon,
  MoonIcon,
  StarIcon,
  CodeIcon,
} from "@heroicons/react/outline";

import { routes } from "./routes";

// app config

export const config = {
  title: "daisyUI",
  home: routes.home,
  pages: [routes.blog, routes.about, routes.settings],
  themes: [
    {
      name: "Light",
      id: "winter",
      icon: <SunIcon className="h-6 w-6" />,
    },
    {
      name: "Dark",
      id: "dark",
      icon: <MoonIcon className="h-6 w-6" />,
    },
    {
      name: "Synthwave",
      id: "synthwave",
      icon: <StarIcon className="h-6 w-6" />,
    },
    {
      name: "Cyberpunk",
      id: "cyberpunk",
      icon: <CodeIcon className="h-6 w-6" />,
    },
  ],
  masonryColumns: {
    default: 4,
    960: 3,
    730: 2,
    500: 1,
  },
};
