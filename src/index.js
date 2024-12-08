import React from "react";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound";
import LoginPage from "./components/LoginPage";
import Poll from "./components/Poll";
import Leaderboard from "./components/Leaderboard";
import NewQuestion from "./components/NewQuestion";
import Questions from "./components/Questions";
import PrivateRoute from "./components/PrivateRoute";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <PrivateRoute component={Questions} />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/leaderboard",
        element: <PrivateRoute component={Leaderboard} />,
      },
      {
        path: "/add",
        element: <PrivateRoute component={NewQuestion} />,
      },

      {
        path: "/questions/:question_id",
        element: <PrivateRoute component={Poll} />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    },
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
