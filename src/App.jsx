import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import FoodDetails from "./pages/FoodDetails";
import Cart from "./pages/Cart";
import OrderSummary from "./pages/OrderSummary";
import DeliveryDetails from "./pages/DeliveryDetails";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";
import CardLoading from "./pages/CardLoading";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Placeholder from "./pages/Placeholder";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* marketing/onboarding */}
        <Route
          path="/welcome"
          element={
            <Layout>
              <Welcome />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />

        {/* main app */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/explore"
          element={
            <Layout>
              <Explore />
            </Layout>
          }
        />
        <Route
          path="/food/:id"
          element={
            <Layout>
              <FoodDetails />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <Cart />
            </Layout>
          }
        />
        <Route
          path="/order-summary"
          element={
            <Layout>
              <OrderSummary />
            </Layout>
          }
        />
        <Route
          path="/delivery"
          element={
            <Layout>
              <DeliveryDetails />
            </Layout>
          }
        />
        <Route
          path="/payment"
          element={
            <Layout>
              <Payment />
            </Layout>
          }
        />
        <Route
          path="/card-loading"
          element={
            <Layout>
              <CardLoading />
            </Layout>
          }
        />
        <Route
          path="/order-success"
          element={
            <Layout>
              <OrderSuccess />
            </Layout>
          }
        />

        {/* placeholders */}
        <Route
          path="/my-orders"
          element={
            <Layout>
              <Placeholder title="My Orders" />
            </Layout>
          }
        />
        <Route
          path="/account"
          element={
            <Layout>
              <Placeholder title="Account" />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Placeholder title="Contact" />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <Placeholder title="Page not found" />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
