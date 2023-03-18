import Navbar from "./components/Navbar/Navbar"
// import ContactNavbar from "./components/ContactNavbar/ContactNavbar"
// import RequestConsaltation from "./components/RequestConsaltation/RequestConsaltation"
import Aboutus from "./components/Aboutus/Aboutus"
import Hero from "./components/Hero/Hero"
import Information from "./components/Information/Information"
// import Register from "./components/Register/Register"
import Footer from "./components/Footer/Footer"
import Testimonial from "./components/Testimonial/Testimonial"

const App = () => {
  return (
    <>
      {/* <ContactNavbar /> */}
      <Navbar />
      <Hero />
      {/* <RequestConsaltation /> */}
      <Aboutus />
      <Information/>
      <Testimonial/>
      {/* <Register/> */}
      <Footer/>
    </>
  )
}

export default App