

import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import "./style.css";

const siteProps = {
  name: "Nikhil Undare",
  title: "Web Developer",
  email: "nikundare111@gmail.com",
  gitHub: "NikhilUndare",
 
  linkedIn: "nikhil-undare-367b34313/",
  
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

function App() {
  return (
    <div id="main">
      <Header/>
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio/>
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
      
    </div>
  );
}

export default App;
