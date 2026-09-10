// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

/* ************************************************************************* */

import App from "./App";

import MacaronList from "./pages/MacaronList";
import Home from "./pages/Home";
import Instructions from "./pages/Instructions";
import MacaronDetails from "./pages/MacaronDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructions",
        element: <Instructions />,
      },
      {
        path: "/macarons",
        element: <MacaronList />,
      },
      {
        path: "/macarons/:id",
        element: <MacaronDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3310/api/macarons/${params.id}`),
      },
    ],
  },
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);