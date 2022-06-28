import Cart from "pages/cart";
import PageDetails from "pages/details";
import Home from "pages/home";
import PageTemplate from "pages/templates";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <PageTemplate>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="details/" element={<PageDetails />}>
            <Route path=":id" element={<PageDetails />} />
          </Route>
        </Routes>
      </PageTemplate>
    </Router>
  );
};

export default AppRouter;
