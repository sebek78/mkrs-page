import { ThemeProvider } from "styled-components";
import theme from "./helpers/theme";
import Section from "./containers/Section";
import Header from "./containers/Header";
import Introduction from "./containers/Introduction";
import Features from "./containers/Features";
import Gallery from "./containers/Gallery";

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
        <>Visit us</>
      </Section>
      <Section bgColor={"dark"}>
        <>Footer</>
      </Section>
    </ThemeProvider>
  );
}

export default App;
