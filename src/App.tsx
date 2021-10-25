import { ThemeProvider } from "styled-components";
import theme from "./helpers/theme";
import Section from "./components/Section";
import Header from "./containers/Header";
import Introduction from "./containers/Introduction";
import Features from "./containers/Features";
import Gallery from "./containers/Gallery";
import VisitUs from "./containers/VisitUs";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Section bgColor={"dark"}>
        <Introduction />
      </Section>
      <Section>
        <Features />
      </Section>
      <Section bgColor={"dark"}>
        <Gallery />
      </Section>
      <Section>
        <VisitUs />
      </Section>
      <Section bgColor={"dark"}>
        <>Footer</>
      </Section>
    </ThemeProvider>
  );
}

export default App;
