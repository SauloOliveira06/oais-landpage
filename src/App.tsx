import { BodyPage } from "./components/BodyPage";
import { EasterEggSection } from "./components/EasterEggSection";
import { EventSection } from "./components/EventSection";
import { Hero } from "./components/Hero";
import { SectionAboutUs } from "./components/SectionAboutUs";
import { SectionDepoiments } from "./components/SectionDepoiments";

function App() {
  return (
    <>
      <Hero />
      <BodyPage />
      <EasterEggSection />
      <EventSection />
      <SectionDepoiments />
      <SectionAboutUs />
    </>
  );
}

export default App;
