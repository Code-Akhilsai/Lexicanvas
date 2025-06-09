import { useState } from "react";
import Imagegen from "./Imagegen";
import Generations from "./Generations";
import "./App.css";

function App() {
  const [imageUrl, setImageUrl] = useState(null);

  return (
    <>
      <Imagegen setImageUrl={setImageUrl} />
      <Generations imageUrl={imageUrl} />
    </>
  );
}
export default App;
