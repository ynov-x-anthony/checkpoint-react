// Import necessary modules from React and React Router
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import MacaronDetails from "./pages/MacaronDetails.tsx";

/* ************************************************************************* */

import App from "./App";

import MacaronList from "./pages/MacaronList";
import Home from "./pages/Home";
import Instructions from "./pages/Instructions";

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
        loader: async ({ params }) => {
          const res = await fetch(`http://localhost:3310/api/macarons/${params.id}`);
            if (!res.ok) throw new Response("Not Found", { status: 404 });
            return res.json();
        },
      }
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
  <>
    <RouterProvider router={router} />
  </>,
);
