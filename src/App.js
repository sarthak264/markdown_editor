import { useState } from "react/cjs/react.development";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [input, setInput] = useState(null);

  return (
    <div className="page_wrapper">
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}

export default App;
