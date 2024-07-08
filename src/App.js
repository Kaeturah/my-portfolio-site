
import Navbar from "./comps/navbar";
import HomePage from "./pages/homepage";
import Footer from "./comps/footer";
import About from "./pages/about";

const App = () => {
  return (
    <div>
      <Navbar />

      
        <HomePage />
      
      <About />

      <Footer />
    </div>
  );
};

export default App;
