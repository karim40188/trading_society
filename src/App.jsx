import "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import "./App"

function App() {
  const router = createBrowserRouter([{ path: "/", element: <Layout /> }]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
