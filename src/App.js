import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/home";
import About from "./Routes/About/about";
import Bagproduct from "./Routes/Bagproduct/bagproduct";
import Clothproduct from "./Routes/Clothproduct/clothproduct";
import Shoeproduct from "./Routes/Shoeproduct/shoeproduct";
import Allproduct from "./Routes/Allproducts/allproduct";
import News from "./Routes/News/news";
import Contact from "./Routes/Contact/contact";
import Faq from "./Routes/FAQ/faq";
import Navbar from "./Navigation/navbar";
import Scrolltotop from "./Routes/Scroptotop/scrolltotop";
import Signin from "./Auth/signin";
import Signup from "./Auth/signup";
import Footer from "./Routes/Footer/footer";
import Notfound from "./Routes/Notfound/notfound";


function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element= {<Navbar/>}>
        <Route index element= {<Home/>}/>
        <Route path="/about" element= {<About/>}/>
        <Route path="/bagproduct" element= {<Bagproduct/>}/>
        <Route path="/clothproduct" element= {<Clothproduct/>}/>
        <Route path="/shoeproduct" element= {<Shoeproduct/>}/>
        <Route path="/allproduct" element= {<Allproduct/>}/>
        <Route path="/news" element= {<News/>}/>
        <Route path="/contact" element= {<Contact/>}/>
        <Route path="/faq" element= {<Faq/>}/>
        <Route path="/signin" element= {<Signin/>}/>
        <Route path="/signup" element= {<Signup/>}/>
        <Route path="*" element= {<Notfound/>}/>
        </Route>
      </Routes>
      <Scrolltotop/>
      <Footer/>
    </Fragment>
    
  );
}

export default App;
