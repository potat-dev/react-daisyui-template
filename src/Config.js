import {
  SunIcon,
  MoonIcon,
  StarIcon,
  CodeIcon,
} from "@heroicons/react/outline";

// app config

const config = {
  app_name: "daisyUI",
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
};

export default config;
