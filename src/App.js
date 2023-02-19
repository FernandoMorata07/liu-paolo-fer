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
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={user ? <HomePage /> : <LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/link/:id" element={<LinkPage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
