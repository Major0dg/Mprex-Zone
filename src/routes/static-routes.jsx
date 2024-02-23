import { Route } from "react-router-dom";
import HomePage from "../pages/static-pages/HomePage";

export default function GetStaticRoutes() {
  return (
    <>
      <Route path="/" element={<HomePage />} />
    </>
  );
}
