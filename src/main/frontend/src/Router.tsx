import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/common/Layout";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/signup"} element={<SignUpPage />} />
          <Route path={"/login"} element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
