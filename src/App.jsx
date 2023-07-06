import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Submenu from "./components/submenu/Submenu";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </div>
  );
}

export default App;
