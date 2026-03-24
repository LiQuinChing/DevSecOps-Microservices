import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { AuthProvider, useAuth } from "./AuthContext";

// Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AdminFooter from "./components/AdminFooter";
import CustomerFooter from "./components/CustomerFooter";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import PaymentPage from "./pages/PaymentPage";
import PaymentHistoryPage from "./pages/PaymentHistoryPage";
import ManageCustomersPage from "./pages/ManageCustomersPage";

import Products from "./pages/Products";
import AddProducts from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

import Suppliers from "./pages/Suppliers";
import AddSupplier from "./pages/AddSupplier";
import EditSupplier from "./pages/EditSupplier";

import OrderProducts from "./pages/OrderProducts";
import OrderPage from "./pages/OrderPage"; // Admin Dashboard
import CustomerOrderPage from "./pages/CustomerOrderPage"; // Customer View

// 🔐 Protected Route (Any logged-in user)
function ProtectedRoute({ children }) {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" replace />;
}

// 🔐 Admin Route (Strictly Admins)
function AdminRoute({ children }) {
  const { token, role } = useAuth();
  if (!token) return <Navigate to="/login" replace />;
  return role === "ADMIN" ? children : <Navigate to="/profile" replace />;
}

// 👤 User Route (Strictly non-admins/customers)
function UserRoute({ children }) {
  const { token, role } = useAuth();
  if (!token) return <Navigate to="/login" replace />;
  // Checking !== 'ADMIN' is safer in case default user role strings differ
  return role !== "ADMIN" ? children : <Navigate to="/" replace />;
}

// 🧱 Dynamic Layout Wrapper
function Layout({ children }) {
  const { role, token } = useAuth();

  // Not logged in → show normal Navbar & Public Footer
  if (!token) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    );
  }

  // Admin → Sidebar layout ONLY (No Navbar)
  if (role === "ADMIN") {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 ml-64 flex flex-col min-h-screen">
          <main className="flex-1 bg-slate-100">{children}</main>
          <AdminFooter />
        </div>
      </div>
    );
  }

  // Customer → Navbar and Customer Footer
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-slate-100">{children}</main>
      <CustomerFooter />
    </div>
  );
}

// 🌐 App Routes
function AppRoutes() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Toaster position="bottom-right" reverseOrder={false} />

      <Layout>
        <Routes>
          {/* 🔓 Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* 🛡️ Shared Protected Routes (Both Admin & Customer) */}
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="/payments" element={<ProtectedRoute><PaymentHistoryPage /></ProtectedRoute>} />

          {/* 👤 CUSTOMER ROUTES */}
          <Route path="/payment" element={<UserRoute><PaymentPage /></UserRoute>} />
          <Route path="/order-products" element={<UserRoute><OrderProducts /></UserRoute>} />
          <Route path="/my-orders" element={<UserRoute><CustomerOrderPage /></UserRoute>} />

          {/* 🛠 ADMIN ROUTES */}
          <Route path="/customers" element={<AdminRoute><ManageCustomersPage /></AdminRoute>} />
          <Route path="/orders" element={<AdminRoute><OrderPage /></AdminRoute>} />
          
          <Route path="/products" element={<AdminRoute><Products /></AdminRoute>} />
          <Route path="/add-product" element={<AdminRoute><AddProducts /></AdminRoute>} />
          <Route path="/edit-product/:id" element={<AdminRoute><EditProduct /></AdminRoute>} />
          
          <Route path="/suppliers" element={<AdminRoute><Suppliers /></AdminRoute>} />
          <Route path="/add-supplier" element={<AdminRoute><AddSupplier /></AdminRoute>} />
          <Route path="/edit-supplier/:id" element={<AdminRoute><EditSupplier /></AdminRoute>} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </div>
  );
}

// 🚀 Main App
export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}