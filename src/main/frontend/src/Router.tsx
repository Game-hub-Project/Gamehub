import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/common/Layout";
import SignUpPage from "./pages/SignUpPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/"} element={<HomePage />}></Route>
          <Route path={"/signup"} element={<SignUpPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
