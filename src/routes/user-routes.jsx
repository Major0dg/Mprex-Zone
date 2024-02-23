import { Route } from "react-router-dom";
import HomePage from "../pages/user/HomePage";
import Layout from "../components/layouts/user/Layout";

export default function GetUserRoutes() {
  return (
    <Route path="/user" element={<Layout />}>
      <Route index element={<HomePage />} />
    </Route>
  );
}
