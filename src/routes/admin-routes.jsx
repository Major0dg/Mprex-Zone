import { Route } from "react-router-dom";

import Dashboard from "../pages/admin/Dashboard";
import Invoices from "../pages/admin/Invoices";
import Settings from "../pages/admin/Settings";
import Layout from "../components/layouts/admin/Layout";

export default function GetAdminRoutes() {
  return (
    <>
      <Route path="/admin" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/admin/invoices" element={<Invoices />} />
        <Route path="/admin/settings" element={<Settings />} />
      </Route>
    </>
  );
}
