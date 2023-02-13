import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Headers";
import { Footer } from "./components/Footer";

import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { LinkPage } from "./pages/LinkPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/link/:id" element={<LinkPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
