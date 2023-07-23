import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { PreviousWork } from "./components/PreviousWork";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <PreviousWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
