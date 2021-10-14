import { ThemeProvider } from "styled-components";
import Header from "./containers/Header";
import Introduction from "./containers/Introduction";
import theme from "./helpers/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Introduction />
    </ThemeProvider>
  );
}

export default App;
