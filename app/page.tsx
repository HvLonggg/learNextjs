import Header from "@/components/Header";
import Banner from"@/components/Banner";
import CounterSection from "@/components/Counter Section";
import Services from "@/components/Services";
import ProcessSection from "@/components/Process Section";
import Feedback from "@/components/Feedback";
import Contact from "@/components/Contact";
import LogoMarquee from "@/components/Logo Marquee";
import Office from "@/components/Office";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <CounterSection />
      <Services />
      <ProcessSection />
      <Feedback />
      <Contact />
      <LogoMarquee />
      <Office />
      <Footer />
    </main>
  );
}