import { useState } from "react";
import Imagegen from "./Imagegen";
import Generations from "./Generations";
import "./App.css";
import Footer from "./Footer";
import Menubar from "./Menubar";

function App() {
  const [imageUrl, setImageUrl] = useState(null);

  return (
    <>
      <Menubar />
      <Imagegen setImageUrl={setImageUrl} />
      <Generations imageUrl={imageUrl} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer />
      <br />
    </>
  );
}
export default App;
