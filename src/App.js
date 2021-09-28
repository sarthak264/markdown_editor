import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="page_wrapper">
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
      <Output source={input} />
    </div>
  );
}

export default App;
