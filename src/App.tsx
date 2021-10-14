import { ThemeProvider } from "styled-components";
import Header from "./containers/Header";
import theme from "./helpers/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
