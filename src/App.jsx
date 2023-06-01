import { Route, Routes, Navigate } from "react-router-dom";
import Settings from "./pages/Settings";
import Admin from "./layouts/Admin/Admin";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Reports from "./pages/Reports";
import Login from "./layouts/Login";
import { useContext } from "react";
import { AuthContext } from "./AuthProviders/AuthProviders";
import { MagnifyingGlass } from "react-loader-spinner";

const App = () => {
  const { user, loading } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/login" element={<Login />} /> {/* Route for Login component */}
      <Route
        path="/*"
        element={
          loading ? (<div className="w-full min-h-screen flex flex-col justify-center items-center">
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="MagnifyingGlass-loading"
              wrapperStyle={{}}
              wrapperClass="MagnifyingGlass-wrapper"
              glassColor='#7bd1fc66'
              color='#60a5fa'
            />
          </div>
          ) : user ? (
            <div>
              <Admin>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/customers" element={<Customers />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </Admin>
            </div>
          ) : (
            <Navigate to="/login" replace /> // Redirect to login page if not authenticated
          )
        }
      />
    </Routes>
  );
};

export default App;
