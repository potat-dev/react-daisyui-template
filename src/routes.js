import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Settings from "./pages/Settings";

export const routes = {
  home: {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  about: {
    name: "About",
    path: "/about",
    component: <About />,
  },
  blog: {
    name: "Blog",
    path: "/blog",
    component: <Blog />,
  },
  settings: {
    name: "Settings",
    path: "/settings",
    component: <Settings />,
  }
}