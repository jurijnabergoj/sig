import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsArticle from "./pages/NewsArticle";
import News from "./pages/News";
import AboutFounder from "./pages/AboutFounder";
import AboutInstitution from "./pages/AboutInstitution";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './i18n';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/institution" element={<AboutInstitution />} />
        <Route path="/founder" element={<AboutFounder />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news/:id" element={<NewsArticle />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
