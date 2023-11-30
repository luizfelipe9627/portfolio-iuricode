import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import AppRoutes from "./router";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
