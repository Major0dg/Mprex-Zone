import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import GetAdminRoutes from "./routes/admin-routes";
import GetUserRoutes from "./routes/user-routes";
import GetStaticRoutes from "./routes/static-routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {GetAdminRoutes()}
        {GetUserRoutes()}
        {GetStaticRoutes()}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
