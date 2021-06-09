import logo from "./logo.svg";
import "./App.css";

import ReCAPTCHA from "react-google-recaptcha";

function App() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div className="App">
      <ReCAPTCHA
        style={{
          display: "flex",
          marginTop: "50px",
          justifyContent: "center",
          alignItems: "center",
        }}
        sitekey="6LfyLhsbAAAAANozFN9HmwZlhVWmyGiiDmF7_7gC"
        onChange={onChange}
      />
    </div>
  );
}

export default App;
