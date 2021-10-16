import { ThemeProvider } from "styled-components";
import Section from "./containers/Section";
import Header from "./containers/Header";
import Introduction from "./containers/Introduction";
import theme from "./helpers/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Section>
        <Introduction />
      </Section>
      <Section bgColor={"light"}>
        <>Featues</>
      </Section>
      <Section>
        <>Galery</>
      </Section>
      <Section bgColor={"light"}>
        <>Visit us</>
      </Section>
    </ThemeProvider>
  );
}

export default App;
