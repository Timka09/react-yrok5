import { Layout } from "./components/Layout";
import { ButtonElem } from "./components/Button/Button";
import { GlobalStyle } from "./components/GlobalStyle";
import { Card } from "./components/Card/Card";
import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <ButtonElem />
        <Card></Card>
        <GlobalStyle/>
      </Layout>
    </>
  );
}

export default App;
