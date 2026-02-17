import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
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

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return isAuthenticated ? children : <Navigate to="/welcome" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* marketing/onboarding */}
        <Route
          path="/welcome"
          element={<Welcome />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* main app */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/explore"
          element={
            <ProtectedRoute>
              <Layout>
                <Explore />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/food/:id"
          element={
            <ProtectedRoute>
              <Layout>
                <FoodDetails />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Layout>
                <Cart />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/order-summary"
          element={
            <ProtectedRoute>
              <Layout>
                <OrderSummary />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/delivery"
          element={
            <ProtectedRoute>
              <Layout>
                <DeliveryDetails />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Layout>
                <Payment />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/card-loading"
          element={
            <ProtectedRoute>
              <Layout>
                <CardLoading />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/order-success"
          element={
            <ProtectedRoute>
              <Layout>
                <OrderSuccess />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* placeholders */}
        <Route
          path="/my-orders"
          element={
            <ProtectedRoute>
              <Layout>
                <Placeholder title="My Orders" />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Layout>
                <Placeholder title="Account" />
              </Layout>
            </ProtectedRoute>
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
