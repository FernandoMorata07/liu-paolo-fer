import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Headers";
import { Footer } from "./components/Footer";

import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { LinkPage } from "./pages/LinkPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { UserPage } from "./pages/UserPage";
import { LegalNotice } from "./pages/LegalNotice";
import { AboutUs } from "./pages/AboutUs";
import { useContext } from "react";
import { EditUserPage } from "./pages/EditUserPage";
import { EditPasswordPage } from "./pages/EditPasswordPage";
import { AuthContext } from "./context/AuthContext";
import { ErrorLoginRegisterPage } from "./pages/ErrorLoginRegisterPage";
import { UsersPage } from "./pages/UsersPage";

function App() {
  const { user, token } = useContext(AuthContext);
  return (
    <main className="App">
      {user ? <Header /> : null}
      <Routes>
        <Route path="/" element={user ? <HomePage /> : <LoginPage />} />
        <Route
          path="/register"
          element={user ? <ErrorLoginRegisterPage /> : <RegisterPage />}
        />
        <Route
          path="/login"
          element={user ? <ErrorLoginRegisterPage /> : <LoginPage />}
        />
        <Route path="/link/:id" element={<LinkPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/:id" element={<UsersPage />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/edit-user" element={<EditUserPage />} />
        <Route path="/edit-pass" element={<EditPasswordPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
