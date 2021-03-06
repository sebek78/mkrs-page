import { ThemeProvider } from "styled-components";
import theme from "./helpers/theme";
import Section from "./components/SectionComponents/Section";
import Header from "./containers/Header";
import Introduction from "./containers/Introduction";
import Features from "./containers/Features";
import Gallery from "./containers/Gallery";
import VisitUs from "./containers/VisitUs";
import Footer from "./containers/Footer";
import Copyrights from "./containers/Copyrights";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Section bgColor="dark">
        <Introduction />
      </Section>
      <Section>
        <Features />
      </Section>
      <Section bgColor="dark">
        <Gallery />
      </Section>
      <Section>
        <VisitUs />
      </Section>
      <Section bgColor="dark">
        <Footer />
      </Section>
      <Section bgColor="dark">
        <Copyrights />
      </Section>
    </ThemeProvider>
  );
}

export default App;
