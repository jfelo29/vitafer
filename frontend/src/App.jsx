import Header from "./componets/Header/header.jsx";
import Main from "./componets/Main/Main.jsx";
import WhyUs from "./componets/WhyUS/WhyUs.jsx";
import CallTo from "./componets/CallToAction/callToAction.jsx";
import Footer from "./componets/footer/Footer.jsx";


import CurrentUserContext from "./contexts/currentUserContext.js";
function App() {
 return (
  <div className="App">
   <Header />
   <Main />
   <WhyUs />
   <CallTo />
   <Footer />

  </div>
 );
}

export default App;