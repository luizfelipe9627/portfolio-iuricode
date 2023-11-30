import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="AppBody">
          <AppRoutes />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
