import "./App.css";
import Mainpage from "./pages/Mainpage";
import Detailviewpage from "./pages/Detailviewpage";
import Pickpage from "./pages/Pickpage";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Mainpage /> */}
      {/* <Detailviewpage /> */}
      <Pickpage />
      <Footer />
    </div>
  );
}

export default App;
