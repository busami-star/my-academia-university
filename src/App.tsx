import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Programs from "./components/Programs.tsx";
import Title from "./components/Title.tsx";
import About from "./components/About.tsx";
import Campus from "./components/Campus.tsx";
import Testimonials from "./components/Testimonials.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx"


const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Title subTitle="OUR PROGRAM" title="What we offer"/>
            <Programs />
            <About />
            <Title subTitle="Gallery" title="Campus Photos"/>
            <Campus />
            <Title subTitle="TESTIMONIALS" title="What a student says"/>
            <Testimonials />
            <Title subTitle="Contact us" title="Get in touch"/>
            <Contact />
            <Footer />

        </>
    )
}
export default App
