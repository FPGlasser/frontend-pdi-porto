import { createBrowserRouter } from "react-router-dom";
import {
  RootLayout,
  Home,
  Tracagem,
  Terminal,
  Page404,
  TerminalOpertion
} from "../pages";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Tracagem />,
        children: [
          {
            path: '/terminal',
            element: <Terminal />
          },
          {
            path: '/terminal/:code',
            element: <TerminalOpertion />,
          },

        ]
      },

      {
        path: '*',
        element: <Page404 />,
      }

    ]
  },
])