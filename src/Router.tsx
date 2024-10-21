import { createBrowserRouter } from "react-router-dom";

import { Applayout } from "./components/layouts/AppLayout";

import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";
import Empty from "./pages/Empty";
import Sample from "./pages/Sample";
import Privacy from "./pages/Privacy";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      // element: <Applayout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "privacy",
          element: <Privacy />,
        },
        {
          path: "empty",
          element: <Empty />,
        },
      ],
    },
    {
      path: "*",
      element: <NoMatch />,
    },
  ],
  {
    basename: global.basename,
  }
);
