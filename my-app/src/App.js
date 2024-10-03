import{BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Home from "./Component/Home";
import About from "./Component/About";
import Service from "./Component/Service";
import Navbar from "./Component/Navbar";
import PageNotFound from "./Component/PageNotFound";

function App() {
  return (
    <div className="App">
      <h1>Hello! React router Learning</h1>
      {/* Navigation */}
      <BrowserRouter>
      <Navbar/>
      <Routes>
        
        {/* <Route path="/home" element={<h1>Home Page!!!</h1>}/> */}
        {/* we can call the component also */}
        <Route path="/" element={<Home />}/>
        {/* if we want to display home page as default then we should use only slash /  */}
        <Route path="/about" element={<About />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/*" element={<PageNotFound />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
